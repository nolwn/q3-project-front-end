import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm.js';
import CardList from './components/CardList.js';
import { connect } from 'react-redux'

const App = ({ cards }) => (
  <div className="App">
    <div className='container'>
      <h1>MTG Card Finder</h1>
        <SearchForm />
        <CardList foundCards = {cards} />
    </div>
  </div>
);

const mapStateToProps = ({ cards }) => ({ cards})

export default connect(mapStateToProps, null)(App)

