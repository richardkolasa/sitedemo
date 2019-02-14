import React, { Component } from 'react';

import './ReadingList.css';

import Book from './components/Book';
import Header from './components/Header';

class ReadingListComponent extends Component {
  render() {
    return (
      <div className="books-wrapper">
        <Header className="email" />
        <div className="books-container">
          <Book
            className="book-1"
            imageSource={require('./images/cause-of-all-nations.jpg')}
            altText="The Cause of All Nations by Don H. Doyle"
            url="https://a.co/1XSHWeO"
          />
          <Book
            className="book-2"
            imageSource={require('./images/creativity-inc-book-cover.jpg')}
            altText="Creativity, Inc. by Ed Catmull"
            url="https://a.co/2ApOvK8"
          />
          <Book
            className="book-5"
            imageSource={require('./images/open-organization.jpg')}
            altText="The Open Organization by Jim Whitehurst"
            url="http://a.co/jlvfQW4"
          />
          <Book
            className="book-3"
            imageSource={require('./images/the-news.jpg')}
            altText="The News A User's Manual by Alain de Botton"
            url="https://a.co/0PMTViW"
          />
          <Book
            className="book-7"
            imageSource={require('./images/deadwake.jpg')}
            altText="Dead Wake by Erik Larson"
            url="https://a.co/5mTrViu"
          />
          <Book
            className="book-6"
            imageSource={require('./images/1776.jpg')}
            altText="1776 by David McCullough"
            url="https://a.co/cw3rE1E"
          />
          <Book
            className="book-4"
            imageSource={require('./images/dying-for-a-paycheck.jpg')}
            altText="Dying for a Paycheck by Jeffrey Pfeffer"
            url="https://a.co/53keY7e"
          />
          <Book
            className="book-8"
            imageSource={require('./images/the-subtle-art.jpg')}
            altText="The Subtle Art of Not Giving a F*ck by Mark Manson"
            url="https://a.co/d/hFeHJjn"
          />
        </div>
      </div>
    );
  }
}

export default ReadingListComponent;
