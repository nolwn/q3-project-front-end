import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import ListofDecks from './components/ListofDecks.js';
import LoginForm from './components/LoginForm';
import AuthenticatedRoute from './higherOrderComponents/authenticatedRoute';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {verifyUser} from './actions/authentication';

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.verifyUser()
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
                <AuthenticatedRoute path='/user_id/:user_id/decks' component={ListofDecks} />
              </Switch>
              </div>
          </div> 
      </div>
    </BrowserRouter>
    )}
};

const mapStateToProps = ({ cards }) => ({ cards });

const mapDispatchToProps = dispatch => 
bindActionCreators({
  verifyUser,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);

