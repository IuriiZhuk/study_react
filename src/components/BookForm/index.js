import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

class BookForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      time: '',
      count: '',
      name: '',
      mobile: '',
    }
  }

  handleDateChange = event => {
    this.setState({
      date: event.target.value,
    })
  }
  handleTimeChange = event => {
    this.setState({
      time: event.target.value,
    })
  }
  handleCountChange = event => {
    this.setState({
      count: event.target.value,
    })
  }
  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    })
  }
  handleMobileChange = event => {
    this.setState({
      mobile: event.target.value,
    })
  }

  getUser = () => {
    let user = JSON.parse(sessionStorage.getItem('currnet'))
    return user
  }

  handleSubmit = event => {
    event.preventDefault()

    let currentUser = JSON.parse(sessionStorage.getItem('currnet'))
    let allUsers = JSON.parse(sessionStorage.getItem('users'))
    let activeUserIndex = allUsers.findIndex(
      item => item.email === currentUser.email
    )

    let orderList = allUsers[activeUserIndex].orders.concat(this.state)

    let userAfterOrder = {
      email: allUsers[activeUserIndex].email,
      password: allUsers[activeUserIndex].password,
      orders: orderList,
    }

    allUsers.splice(activeUserIndex, 1, userAfterOrder)

    sessionStorage.setItem('users', JSON.stringify(allUsers))
    this.props.onChangeOrder()
    this.props.onClose()
  }

  render() {
    if (!this.props.show) {
      return null
    }
    return (
      <main className="main-content">
        <div className="main-content__inner">
          <div className="main-content__head">
            <h2 className="main-content__title">Book A Table</h2>
            <p className="menu-main-content__title-descrip">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
              magnam.
            </p>
          </div>

          <section className="menu-main-content__menu book-form">
            <div className="bookFormModal">
              <span
                className="close"
                title="Close"
                onClick={this.props.onClose}
              >
                &times;
              </span>
              <form
                onSubmit={this.handleSubmit}
                className="book-table bookModalContent"
                action="post"
              >
                <div className="bookcontainer">
                  <div className="book-table__date book-table__input-wrapper ">
                    <input
                      type="date"
                      onChange={this.handleDateChange}
                      className="inputBook "
                      required
                    />
                  </div>
                  <div className="book-table__time book-table__input-wrapper">
                    <input
                      type="time"
                      onChange={this.handleTimeChange}
                      className="input "
                      placeholder="Time"
                      required
                    />
                  </div>
                  <div className="book-table__people-count book-table__input-wrapper ">
                    <input
                      type="text"
                      onChange={this.handleCountChange}
                      className="input "
                      placeholder="Number of people"
                      required
                    />
                  </div>
                  <div className="book-table__fio book-table__input-wrapper">
                    <input
                      type="text"
                      onChange={this.handleNameChange}
                      className="input "
                      placeholder=" First Name and Last Name"
                      required
                    />
                  </div>
                  <div className="book-table__phone book-table__input-wrapper">
                    <input
                      type="tel"
                      onChange={this.handleMobileChange}
                      className="input "
                      placeholder="Phone number"
                      required
                    />
                  </div>

                  <div className="book-table__btn-wrapper btn">
                    <input
                      type="submit"
                      className="input book-table__btn"
                      value="Book a Table"
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    )
  }
}

BookForm.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  onChangeOrder: PropTypes.func,
}

export default BookForm
