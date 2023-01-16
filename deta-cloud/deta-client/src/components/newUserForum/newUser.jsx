import { useState } from "react";
// import { useNavigate } from 'react-router-dom'
import '../newUserForm.css'

const NewUser = props => {

  const [value, setValue] = useState({
    age: "",
    hometown: "",
    name: "",
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
            <span>Fill out the forum first.</span>
          ) : null}

          <input
            onChange={handleTxtChange}
            value={value.text}
            type="text"
            placeholder="Who is the new user?"
            name="text" />
          <button
            type="submit">Post</button>
        </form>
      </div>
    </>
  );
};

export default NewUser;