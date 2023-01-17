import { useState } from "react";
// import { useNavigate } from 'react-router-dom'
import '../newUserForum/newUser.css'

const NewUser = props => {

  const [value, setValue] = useState({
    name: "",
    age: "",
    hometown: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleTxtChange = event => {
    setValue({ ...value, text: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.handleAddUser(value);
    if (value.text) {
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
          {submitted && !value.text ? (
            <span>Fill out the forum first</span>
          ) : null}
          <input
            onChange={handleTxtChange}
            value={value.name}
            type="text"
            placeholder="Name"
            name="text" />
          <input
            onChange={handleTxtChange}
            value={value.age}
            type="text"
            placeholder="Age"
            name="text" />
          <input
            onChange={handleTxtChange}
            value={value.hometown}
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