import Router from "next/router";

const Users = (props) => {
  
 
  return (
        <div>
        <ul className="list-group">
           {
              props.users.map((user) => (
                  <li key={user.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={() => Router.push(`/users/[id]`, `/users/${user.id}`)}>
                  <div>
                      <h4>  {user.first_name} {user.last_name}</h4>
                      <h5>Email: {user.email}</h5>
                  </div>
                     <img src={user.avatar} 
                      alt='image of the user'
                       style={{borderRadius: '50%'}} />
                  </li>

              ))
          } 
        </ul>
          
        </div>
    );
}

export default Users;
