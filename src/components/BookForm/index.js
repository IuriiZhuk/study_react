import React, {Component} from 'react';

import './index.css';


class BookForm extends Component {
  render() {
    return (
      <main className="main-content">
        <div className="main-content__inner">
        <div className="main-content__head">
          <h2 className="main-content__title">Book A Table</h2>
          <p clasNames="menu-main-content__title-descrip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, magnam.</p>
        </div>


        <section clasNames="menu-main-content__menu book-form">

          <form className="book-table" action="post">
            <div className = "book-table__date book-table__input-wrapper ">
              <input type="date" className="inputBook "/>
            </div>
            <div className = "book-table__time book-table__input-wrapper">
              <input type="time" className="input " placeholder="Time"/>
            </div>
            <div className = "book-table__people-count book-table__input-wrapper ">
              <input type="text" className="input " placeholder="Number of people"/>
            </div>
            <div className = "book-table__fio book-table__input-wrapper">
              <input type="text" className="input " placeholder=" First Name and Last Name"/>
            </div>
            <div className = "book-table__phone book-table__input-wrapper">
              <input type="tel" className="input " placeholder="Phone number"/>
            </div>
            <div className = "book-table__email book-table__input-wrapper ">
              <input type="email" className="input" placeholder="Email adress"/>
            </div>
            <div className = "book-table__text-area book-table__input-wrapper">
              <textarea className = "book-table__area-content" placeholder="Input text ..."></textarea>
            </div>
            <div className = "book-table__btn-wrapper btn">
              <input type="button" className="input book-table__btn" value="Book a Table"/>
            </div>
          </form>

        </section>
      </div>
    </main>
    );

    }
  }


export default BookForm;