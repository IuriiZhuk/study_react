import React, {Component} from 'react';

import './index.css';


class BookForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      date: '',
      time: '',
      count: '',
      name: '',
      mobile: '',
    }

  }

  handleDateChange = (event) => {
    this.setState({
      date : event.target.value
    });
  } 
  handleTimeChange = (event) => {
    this.setState({
      time : event.target.value
    });
  } 
  handleCountChange = (event) => {
    this.setState({
      count : event.target.value
    });
  } 
  handleNameChange = (event) => {
    this.setState({
      name : event.target.value
    });
  } 
  handleMobileChange = (event) => {
    this.setState({
      mobile : event.target.value
    });
  } 


  getUser = () => {

    let user = JSON.parse(sessionStorage.getItem('currnet')); 
   return user;

  }


  handleSubmit = (event) => {
    event.preventDefault(); 

    let currentUser = this.getUser();
    let orderList = currentUser.orders.concat(this.state);

    let userAfterOrder = {
      email: currentUser.email,
      password : currentUser.password,
      orders : orderList
    }
    sessionStorage.setItem('currnet', JSON.stringify(userAfterOrder));
    this.props.onChangeOrder();
    this.props.onClose();
   
  } 


  render() {

    if(!this.props.show) {
      return null;
    }
    return (
      <main className="main-content">
        <div className="main-content__inner">
        <div className="main-content__head">
          <h2 className="main-content__title">Book A Table</h2>
          <p clasNames="menu-main-content__title-descrip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, magnam.</p>
        </div>


        <section clasNames="menu-main-content__menu book-form">
        <div className="bookFormModal" >
          <span className ="close" title="Close" onClick={this.props.onClose}>&times;</span>
            <form onSubmit = {this.handleSubmit} className="book-table" action="post" className="bookModalContent">
            <div className="container">
              <div className = "book-table__date book-table__input-wrapper ">
                <input type="date" onChange={this.handleDateChange} className="inputBook " />
              </div>
              <div className = "book-table__time book-table__input-wrapper">
                <input type="time" onChange={this.handleTimeChange} className="input " placeholder="Time" />
              </div>
              <div className = "book-table__people-count book-table__input-wrapper ">
                <input type="text" onChange={this.handleCountChange} className="input " placeholder="Number of people"required />
              </div>
              <div className = "book-table__fio book-table__input-wrapper">
                <input type="text" onChange={this.handleNameChange} className="input " placeholder=" First Name and Last Name"required />
              </div>
              <div className = "book-table__phone book-table__input-wrapper">
                <input type="tel" onChange={this.handleMobileChange} className="input " placeholder="Phone number"required />
              </div>
              
              <div  className = "book-table__btn-wrapper btn">
                <input  type="submit" className="input book-table__btn" value="Book a Table"/>
              </div>
              </div>
              
            </form>
          </div>

        </section>
      </div>
    </main>
    );

    }
  }


export default BookForm;