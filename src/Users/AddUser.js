import { ConsoleWriter } from 'istanbul-lib-report';
import {useState} from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css';


const AddUser = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        props.newUserHandler({username: username, age: age})
        setUsername('')
        setAge('')
    }

    const onUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const onAgeChange = (event) => {
        setAge(event.target.value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor ="username">Username</label>
                <input id="username" type="text" value={username} onChange={onUsernameChange} />

                <label htmlFor="age">Age</label>
                <input id="age" type = "number" value = {age} onChange = {onAgeChange} />
                
                <button type="submit">Submit!</button>
            </form>
        </Card>
    )
}

export default AddUser;