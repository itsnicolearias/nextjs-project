import Container from "../components/Container";
import fetch from 'isomorphic-fetch';

import Users from "../components/Users";

const Index = (props) => {
  
  return (
    <Container>
      <h1>List of users:</h1>

      <Users 
        users={props.users}
      />
    </Container>
  );
}
Index.getInitialProps =  async(ctx) => {
  const res = await fetch('https://reqres.in/api/users?page=2')
  const resJSON = await res.json();
  return {
    users: resJSON.data,
  };
};
  
  


export default Index;
