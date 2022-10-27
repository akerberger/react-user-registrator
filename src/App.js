
import { promised } from 'q';
import { useState } from 'react';
import './App.css'
import AddUser from './Users/AddUser';
import Users from './Users/Users';


function App() {

  const [users, setUsers] = useState([])

  const newUserHandler = (props) => {
    console.log("Received new user! Username: "+props.username+" Age: "+props.age)
    setUsers((prev) => [...prev, {username:props.username, age: props.age}])
  }

  return (
    <div>
      <AddUser newUserHandler = {newUserHandler}/>
      <Users users={users}/>
    </div>
  )



}

export default App;
