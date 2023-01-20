import { useState } from "react";
import '../newUserForum/newUserForum.css'
import { createUser } from "../../services/userService.js";

const NewUser = props => {

  const [userData, setUserData] = useState({
    name: "",
    age: "",
    hometown: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleTxtChange = event => {
    const { id, value } = event.target
    event.preventDefault();
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = async (event, data) => {
    event.preventDefault();
    await createUser(data)
    if (userData) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => handleSubmit(e, userData)}>
          {submitted && valid ? (
            <div className="success-msg">Mission Success 🎉</div>
          ) : null}
          {submitted && !userData ? (
            <span>There was an issue with your forum</span>
          ) : null}
          <input
            id="name"
            onChange={handleTxtChange}
            type="text"
            placeholder="Name"
            name="text" />
          <input
            id="age"
            onChange={handleTxtChange}
            type="text"
            placeholder="Age"
            name="text" />
          <input
            id="hometown"
            onChange={handleTxtChange}
            type="text"
            placeholder="Hometown"
            name="text" />
          <button
            type="submit">Add User</button>
        </form>
      </div>
    </>
  );
};

export default NewUser;