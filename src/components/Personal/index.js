import React,{Component} from 'react';

import BookForm from '../BookForm';

import './index.css'

class Personal extends Component {
  constructor(props) {
    super(props);


    this.state = {
      email:'',
      password: '',
      isOpenBookForm : false,
      orders: ''
    }
  }


  getUser = () => {

    let {email,password,orders} = JSON.parse(sessionStorage.getItem('users')); 
    
   
    this.setState({
      email,
      password,
     orders

    })
    

  }

  componentDidMount= () => {
    this.getUser();
  }

  toggleModalBookForm = () => {
    this.setState({
      isOpenBookForm : !this.state.isOpenBookForm
    });

  }

  eachOrder = (order, key ) => (
    <li className="orderItem" key={key} index = {key}>
      {`Date : ${order.date} Time:${order.time} Number of people : ${order.count} Person: ${order.name} Mobile : ${order.mobile}`} 
      <span onClick={this.deleteOrder} className="deleteOrder">Delete</span>
    </li>
    ) 

  


  deleteOrder = (index) => {
    let orders = this.state.orders
    orders.splice(index,1)
    console.log(this.state.orders);
    this.setState({
      orders : orders
    })

    let userAfterDelete = {
      email: this.state.email,
      password :this.state.password,
      orders : this.state.orders
    }

    sessionStorage.setItem('users', JSON.stringify(userAfterDelete));
    
   

  }

  

  render(){
      
     const ordersList =
    
      this.state.orders.length === 0 ? 
      <h3 className="noOrder" > No orders </h3> :
    <div>
      <h3 className="orderTitle"> Your Orders : </h3>
      <ul className="orderList">
        {this.state.orders.map(this.eachOrder )}
      </ul>
    </div>
    
       
    
    
    return (
     
      <main className="main-content">
      <div className="main-content__inner">
      
      <button className="bookFormVisible" onClick={this.toggleModalBookForm} > BOOK A TABLE </button>
      

        <h2 className="personal__title"> {this.state.email}</h2>
        {ordersList}  
        
        

        <BookForm show ={this.state.isOpenBookForm}
                  onClose={this.toggleModalBookForm}
          />
        
      </div>
    </main>
    );
  }


}

export default Personal;