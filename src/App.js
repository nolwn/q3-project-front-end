import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import SearchForm from './components/SearchForm.js';
import CardList from './components/CardList.js';
import ListofDecks from './components/ListofDecks.js';
import LoginForm from './components/LoginForm'
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {

  }

  render() {
    return (
      <BrowserRouter>
      <div className='container'>
          <div className="row" >
            <div className="col border bg-light">
            {/* <h2 className="navbar-brand bg-light">Search Magic Cards</h2>
              <SearchForm />
              <CardList foundCards = {this.props.cards} /> */}
              <Switch>
                <Route path='/login' component={LoginForm}/>
                <Route path='/user_id/:user_id/decks' component={ListofDecks}/>
              </Switch>
              </div>
          </div> 
      </div>
    </BrowserRouter>
    )}
};

const mapStateToProps = ({ cards }) => ({ cards })

export default connect(mapStateToProps, null)(App)

