import { useState } from "react";
import { updateUser } from "./UserReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];

  const [newname, setName] = useState(name);
  const [newemail, setEmail] = useState(email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, name: newname, email: newemail }));
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center flex-column">
      <h2 className="text-center text-bold py-4">UPDATE USER</h2>
      <form className="w-50 shadow-sm border-1 p-4" onSubmit={handleUpdate}>
        <div class="form-group">
          <label for="name">Name: </label>
          <input
            type="text"
            class="form-control my-1"
            id="name"
            value={newname}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group my-3">
          <label for="email">Email: </label>
          <input
            type="email"
            class="form-control my-1"
            value={newemail}
            id="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <button type="submit" class="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
