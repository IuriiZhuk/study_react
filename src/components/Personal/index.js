import React,{Component} from 'react';

import BookForm from '../BookForm';

import './index.css'

class Personal extends Component {
  constructor(props) {
    super(props);

    this.user = {
      email: '111@111',
      orders: [1,2,3,4,5],

    };

    this.state = {
      isOpenBookForm : false,
      orders: [1,2,3,4,5],
    }
  }

  toggleModalBookForm = () => {
    this.setState({
      isOpenBookForm : !this.state.isOpenBookForm
    });

  }

  eachOrder = (order, key ) => (
    <li className="orderItem" key={key} index = {key}>{order} 
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
  }

  

  render(){
    
    const ordersList =
    
      this.state.orders.length ===0 ? 
      <h3> No orders </h3> :
    <div>
      <h3> Your Orders : </h3>
      <ul className="orderList">
        {this.state.orders.map(this.eachOrder )}
      </ul>
    </div>
       
    
    
    return (
      <main className="main-content">
      <div className="main-content__inner">
      <button className="bookFormVisible" onClick={this.toggleModalBookForm} > BOOK A TABLE </button>
      

        <h2 className="personal__title"> {this.user.email}</h2>
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