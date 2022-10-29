import Card from "../UI/Card";
import classes from "./Users.module.css";

const Users = (props) => {
  return props.users.length > 0 ? (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return <li>{user.username + " (" + user.age + " years)"}</li>;
        })}
      </ul>
    </Card>
  ) : null;
};

export default Users;
