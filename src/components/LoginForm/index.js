import React, {Component} from 'react';

import './index.css';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email : '',
        password : ''
    };
}

  handleClickBlock = () => {
    document.getElementById('loginModal').style.display='block';
  }
  handleClickNone = (event) => {

    let modal = document.getElementById('loginModal')
       
    modal.style.display='none';
  }
      
  handleClickCloseAround = (event) => {

    let modal = document.getElementById('loginModal');
      if (event.target === modal) {
          modal.style.display = "none";
      }
  }



  handleEmailChange = (event) => {
    this.setState({
        email : event.target.value
    });
}

handlePasswordChange = (event) => { 
    this.setState ({
        password : event.target.value
    });
}


  handleSubmit = (event) => {
    event.preventDefault();
    let state = this.state;

    let usersDb = JSON.parse(localStorage.getItem('users'));

    console.log(usersDb);

    let user = {
        email : state.email,
        password : state.password
    };

    // let authenticatedUser = usersDb.find((item) => item.email === user.email && item.password === user.password )
    let authenticatedUserIndex = usersDb.findIndex((item) => item.email === user.email && item.password === user.password )
    

    console.log(usersDb);
    console.log(authenticatedUserIndex);
    console.log(usersDb[authenticatedUserIndex]);

    if (authenticatedUserIndex === -1 ) {alert(`Please check e-mail && password`)}
    
    usersDb[authenticatedUserIndex].isLogged = true;
    console.log(usersDb[authenticatedUserIndex]);
    
    

   


}


    render() {
        return (
           <a href="#">
                <button onClick={this.handleClickBlock}>Login</button>

                <div className="loginFormModal" id="loginModal" onClick={this.handleClickCloseAround}>
                  <span className ="close" title="Close" onClick={this.handleClickNone}>&times;</span>

                  <form onSubmit={this.handleSubmit} action="" className="LoginModalContent">
                    
                    <div className="container">

                      <label htmlFor="email"><b>E-mail</b></label>
                      <input onChange={this.handleEmailChange} type="email" placeholder="Enter E-mail" required/>

                      <label htmlFor="psw"><b>Password</b></label>
                      <input onChange = {this.handlePasswordChange} type="password" placeholder="Enter Password" required/>

                      <button type="submit" > Login </button>

                    </div>

                    <div className="container container-bottom clearfix">
                      <button className="cancelbtn" onClick={this.handleClickNone}> Cancel</button>
                     
                    </div>
                  </form>
                </div>
           </a> 
            
        );
    }

}

export default LoginForm;