

const Users = (props) => {
    return (
        <div>
            {props.users.map((user) => {
                return (<div>
                    Username: {user.username}
                    Age: {user.age}
                </div>)
            }
                
            )}




            
        </div>
    )
}

export default Users;