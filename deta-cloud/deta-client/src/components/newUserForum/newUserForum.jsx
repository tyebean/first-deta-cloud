import { useState } from "react";
import '../newUserForum/newUserForum.css'

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

  const handleSubmit = event => {
    event.preventDefault();
    props.handleAddUser(userData);
    if (userData.text) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div className="success-msg">Review Submit Successful 🎉</div>
          ) : null}
          {submitted && !userData.text ? (
            <span>Fill out the forum first</span>
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