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
    setValue({ ...userData, text: event.target.value });
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
            onChange={handleTxtChange}
            value={userData.name}
            type="text"
            placeholder="Name"
            name="text" />
          <input
            onChange={handleTxtChange}
            value={userData.age}
            type="text"
            placeholder="Age"
            name="text" />
          <input
            onChange={handleTxtChange}
            value={userData.hometown}
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