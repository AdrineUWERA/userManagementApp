import { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const users = useSelector((state) => state.users);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center flex-column">
      <h2 className="text-center text-bold py-4">ADD NEW USER</h2>
      <form className="w-50 shadow-sm border-1 p-4" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="name">Name: </label>
          <input
            type="text"
            class="form-control my-1"
            id="name"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group my-3">
          <label for="email">Email: </label>
          <input
            type="email"
            class="form-control my-1"
            value={email}
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

export default Create;
