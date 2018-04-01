import React, {Component} from 'react';

import './index.css';

class SignupForm extends Component {
  

  handleClickBlock = () => {
    document.getElementById('signUp').style.display='block';
  }
  handleClickNone = (event) => {

    let modal = document.getElementById('signUp')
       
    modal.style.display='none';
  }
      
  handleClickCloseAround = (event) => {

    let modal = document.getElementById('signUp');
      if (event.target === modal) {
          modal.style.display = "none";
      }
  }
  

  
    render() {
        return (
            <a href="#">
                <button onClick={this.handleClickBlock} >Sign Up</button>

                <div className="modalSignUp" id="signUp" onClick={this.handleClickCloseAround} >
                    <span className="close" title="Close Modal" onClick={this.handleClickNone}>&times;</span>

                    <form action="" className="modalSignupContent">
                    
                        <div className="container">
                            <h1>Sign Up</h1>
                            <p>Please fill in this form to create an account</p>
                            <hr/>
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required/>

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name ="psw" required/>

                            
                            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Enter Password" name ="psw-repeat" required/>

                            
                            <div class="clearfix">
                              <button type="button" onClick={this.handleClickNone} className="cancelbtn">Cancel</button>
                              <button type="submit" class="signupbtn">Sign Up</button>
                            </div>

                        
                        </div>

                    </form>

                </div>
            </a>
        );
    }

}

export default SignupForm;




