
import { promised } from 'q';
import { useState } from 'react';
import './App.css'
import AddUser from './Users/AddUser';
import Users from './Users/Users';


function App() {

  const [users, setUsers] = useState([])

  const newUserHandler = (props) => {
    const newUser = {username: props.username, age: props.age}

    setUsers((prev) => [...prev, newUser])
  }

  return (
    <div>
      <AddUser newUserHandler = {newUserHandler}/>
      <Users users={users}/>
    </div>
  )



}

export default App;
