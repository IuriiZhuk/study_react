import React, {Component} from 'react';

import './index.css';


class LoginForm extends Component {

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

    render() {
        return (
           <a href="#">
                <button onClick={this.handleClickBlock}>Login</button>

                <div className="loginFormModal" id="loginModal" onClick={this.handleClickCloseAround}>
                  <span className ="close" title="Close" onClick={this.handleClickNone}>&times;</span>

                  <form action="" className="LoginModalContent">
                    
                    <div className="container">

                      <label htmlFor="uname"><b>Username</b></label>
                      <input type="text" placeholder="Enter Username" required/>

                      <label htmlFor="psw"><b>Password</b></label>
                      <input type="password" placeholder="Enter Password" required/>

                      <button type="submit" > Login </button>

                    </div>

                    <div className="container container-bottom clearfix">
                      <button className="cancelbtn" onClick={this.handleClickNone}> Cancel</button>
                      <span className="psw"> Forgot <a href="#"> password ?</a></span>
                    </div>
                  </form>
                </div>
           </a> 
            
        );
    }

}

export default LoginForm;