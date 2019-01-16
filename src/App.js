import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import SearchForm from './components/SearchForm.js';
import CardList from './components/CardList.js';
import { connect } from 'react-redux'

const App = ({ cards }) => (
  <div className="App">
    <div className='container'>
        <div className="row" >
          <div className="col-5 border bg-light">
          <h2 className="navbar-brand bg-light">Search Magic Cards</h2>
            <SearchForm />
            <CardList foundCards = {cards} />
          </div>
        </div> 
    </div>
  </div>
);

const mapStateToProps = ({ cards }) => ({ cards})

export default connect(mapStateToProps, null)(App)

