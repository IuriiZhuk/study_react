import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './index.css';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email : '',
        password : ''
    };
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

    let usersDb = JSON.parse(sessionStorage.getItem('users'));

    console.log(usersDb);

    let user = {
        email : state.email,
        password : state.password
    };

    // let authenticatedUser = usersDb.find((item) => item.email === user.email && item.password === user.password )
    let authenticatedUserIndex = usersDb.findIndex((item) => item.email === user.email && item.password === user.password )

    if (authenticatedUserIndex === -1 ) {alert(`Please check e-mail && password`)
    return;
  }
    
    alert(`You are successfully loggin`);
    let currentUser = usersDb[authenticatedUserIndex];
    sessionStorage.setItem('currnet', JSON.stringify(currentUser));
   
    this.props.isUserLogin();
    this.props.onClose();

    
    

}


    render()  {
      
      if(!this.props.show) {
      return null;
    }
        return (
           
                <div className="loginFormModal" id="loginModal">
                  <span className ="close" title="Close" onClick={this.props.onClose}>&times;</span>

                  <form onSubmit={this.handleSubmit} action="" className="LoginModalContent">
                    
                    <div className="container">

                      <label htmlFor="email"><b>E-mail</b></label>
                      <input onChange={this.handleEmailChange} type="email" placeholder="Enter E-mail" required/>

                      <label htmlFor="psw"><b>Password</b></label>
                      <input onChange = {this.handlePasswordChange} type="password" placeholder="Enter Password" required/>

                      <button type="submit" > Login </button>

                    </div>

                    <div className="container container-bottom clearfix">
                      <button className="cancelbtnLogin" onClick={this.props.onClose}> Cancel</button>
                     
                    </div>
                  </form>
                

                

                  
              </div>          
            
        );
    }

}

LoginForm.proptypes = {
    show: PropTypes.bool,
    isUserLogin : PropTypes.func,
    onClose: PropTypes.func
};



export default LoginForm;