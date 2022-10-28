
import {useState} from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button'


const AddUser = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserSubmitHandler = (event) => {
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
            <form onSubmit={addUserSubmitHandler}>
                <label htmlFor ="username">Username</label>
                <input id="username" type="text" value={username} onChange={onUsernameChange} />

                <label htmlFor="age">Age</label>
                <input id="age" type = "number" value = {age} onChange = {onAgeChange} />
                
                
                <Button type="submit">Submit!</Button>
            </form>
        </Card>
    )
}

export default AddUser;