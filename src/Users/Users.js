

const Users = (props) => {
    return (
        <div>
            {props.users.map((user, i) => {
                console.log("i = "+i)
                return (<div key = {i}>
                    Username: {user.username}
                    Age: {user.age}
                </div>)
            }
                
            )}




            
        </div>
    )
}

export default Users;