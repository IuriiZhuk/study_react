import React, {Component} from 'react';

import './index.css';

class SignupForm extends Component {
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


    let usersDb = JSON.parse(localStorage.getItem('users'));
    if (!usersDb) {usersDb = []}


    let newUser = {
        email : state.email,
        password : state.password
    };

    usersDb = usersDb.concat(newUser);
    
    localStorage.setItem('users', JSON.stringify(usersDb));

    console.log(JSON.parse(localStorage.getItem('users')));

}


  
    render() {

        if(!this.props.show) {
            return null;
          }

        return (
            

                <div className="modalSignUp" id="signUp"  >
                    <span className="close" title="Close Modal" onClick={this.props.onClose}>&times;</span>

                    <form action="" className="modalSignupContent" onSubmit={this.handleSubmit}>
                    
                        <div className="container">
                            <h1>Sign Up</h1>
                            <p>Please fill in this form to create an account</p>
                            <hr/>
                            <label htmlFor="email"><b>Email</b></label>
                            <input onChange={this.handleEmailChange} type="email" placeholder="Enter Email" name="email" required/>

                            <label htmlFor="psw"><b>Password</b></label>
                            <input  onChange={this.handlePasswordChange} type="password" placeholder="Enter Password" name ="psw" required/>

                                                                                
                            <div class="clearfix">
                              <button type="button" onClick={this.props.onClose} className="cancelbtn">Cancel</button>
                              <button type="submit" class="signupbtn">Sign Up</button>
                            </div>

                        
                        </div>

                    </form>

                </div>
            
        );
    }

}

export default SignupForm;




