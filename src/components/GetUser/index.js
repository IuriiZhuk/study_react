import React,{Component} from 'react'


class GetUser extends Component {


getUser = () => {
  let currentUser = JSON.parse(sessionStorage.getItem('currnet'));
  let allUsers = JSON.parse(sessionStorage.getItem('users'));

  console.log(`current user`, currentUser);
  console.log(`allUsers`,allUsers);

  let activeUserIndex = allUsers.findIndex( (item) => item.email === currentUser.email  );

  console.log(`activeUser`, activeUserIndex); 

}



  render (){
      this.getUser();

    return (
      <div>
        
      </div>

  );
}
}

export default GetUser;