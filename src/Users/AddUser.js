import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState();

  const addUserSubmitHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setErrors({
        title: "Invalid username",
        message: "Please enter a valid username and age (non empty values)",
      });
      return;
    }
    if (+age < 1) {
      setErrors({
        title: "Invalid age",
        message: "Please enter a valid username and age (age > 0 )",
      });
      return;
    }

    props.newUserHandler({ username: username, age: age });
    setUsername("");
    setAge("");
  };

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onAgeChange = (event) => {
    setAge(event.target.value);
  };

  const resetErrorsHandler = () => {
    setErrors(null);
  };

  return (
    <div>
      {/* {errors && (
        <ErrorModal
          title="An error occurred!"
          content={errors.map((error) => {
            return error.message + " ";
          })}
        />
      )} */}
      {errors && (
        <ErrorModal
          title={errors.title}
          message={errors.message}
          onResetClickHandler={resetErrorsHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={onUsernameChange}
          />

          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={age} onChange={onAgeChange} />

          <Button type="submit">Submit!</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
