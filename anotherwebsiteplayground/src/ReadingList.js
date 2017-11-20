import React, { Component } from 'react';
import './ReadingList.css';

import Book from './components/Book';
import Header from './components/Header';

export default class ReadingList extends Component {
  render() {
    return (
      <div className="books-wrapper">
        <Header />
        <div className="books-container">
          <Book
            className="book-1"
            imageSource="https://images-na.ssl-images-amazon.com/images/I/61RX8ZyvuZL.jpg"
            title="The Cause of All Nations"
            author="Don H. Doyle"
          />
          <Book
            className="book-2"
            imageSource="https://images-na.ssl-images-amazon.com/images/I/81gFiHaUmWL.jpg"
            title="Mr. Mercedes"
            author="Stephen King"
          />
          <Book
            className="book-3"
            imageSource="https://images-na.ssl-images-amazon.com/images/I/41BtBXgUyAL.jpg"
            title="The Open Organization"
            author="Jim Whitehurst"
          />
        </div>
      </div>
    );
  }
}
