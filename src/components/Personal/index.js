import React, { Component } from 'react'

import BookForm from '../BookForm'

import './index.css'

class Personal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      isOpenBookForm: false,
      orders: '',
    }
  }

  getCurrnetUser = () => {
    let currentUser = JSON.parse(sessionStorage.getItem('currnet'))
    let allUsers = JSON.parse(sessionStorage.getItem('users'))
    let activeUserIndex = allUsers.findIndex(
      item => item.email === currentUser.email
    )

    let { email, password, orders } = allUsers[activeUserIndex]

    this.setState({
      email,
      password,
      orders,
    })
  }

  getOrders = () => {
    let currentUser = JSON.parse(sessionStorage.getItem('currnet'))
    let allUsers = JSON.parse(sessionStorage.getItem('users'))
    let activeUserIndex = allUsers.findIndex(
      item => item.email === currentUser.email
    )

    let { orders } = allUsers[activeUserIndex]

    this.setState({
      orders,
    })
  }

  componentDidMount = () => {
    this.getCurrnetUser()
  }

  toggleModalBookForm = () => {
    this.setState({
      isOpenBookForm: !this.state.isOpenBookForm,
    })
  }

  eachOrder = (order, index) => (
    <li className="orderItem" key={index} indexitem={index}>
      {`Date : ${order.date} Time:${order.time} Number of people : ${
        order.count
      } Person: ${order.name} Mobile : ${order.mobile}`}
      <span
        onClick={this.deleteOrder.bind(this, index)}
        className="deleteOrder"
      >
        Delete
      </span>
    </li>
  )

  deleteOrder = index => {
    let orders = this.state.orders

    orders.splice(index, 1)

    this.setState({
      orders: orders,
    })

    let userAfterDelete = {
      email: this.state.email,
      password: this.state.password,
      orders: this.state.orders,
    }

    let currentUser = JSON.parse(sessionStorage.getItem('currnet'))
    let allUsers = JSON.parse(sessionStorage.getItem('users'))
    let activeUserIndex = allUsers.findIndex(
      item => item.email === currentUser.email
    )

    allUsers.splice(activeUserIndex, 1, userAfterDelete)

    sessionStorage.setItem('users', JSON.stringify(allUsers))
  }

  render() {
    const ordersList =
      this.state.orders === '' ||
      undefined ||
      this.state.orders.length === 0 ? (
        <h3 className="noOrder"> No orders </h3>
      ) : (
        <div>
          <h3 className="orderTitle"> Your Orders : </h3>
          <ul className="orderList">{this.state.orders.map(this.eachOrder)}</ul>
        </div>
      )

    return (
      <main className="main-content">
        <div className="main-content__inner">
          <button
            className="bookFormVisible"
            onClick={this.toggleModalBookForm}
          >
            {' '}
            BOOK A TABLE{' '}
          </button>

          <h2 className="personal__title"> {this.state.email}</h2>
          {ordersList}

          <BookForm
            show={this.state.isOpenBookForm}
            onClose={this.toggleModalBookForm}
            onChangeOrder={this.getOrders}
          />
        </div>
      </main>
    )
  }
}

export default Personal
