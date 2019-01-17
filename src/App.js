import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import ListofDecks from './components/ListofDecks.js';
<<<<<<< HEAD
import LoginForm from './components/LoginForm';
import AuthenticatedRoute from './higherOrderComponents/authenticatedRoute';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {verifyUser} from './actions/authentication';
=======
import DeckView from './components/DeckView'
import { connect } from 'react-redux';
>>>>>>> working without redux yet

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
<<<<<<< HEAD
          <div className="row" >
            <div className="col border bg-light">
            {/* <h2 className="navbar-brand bg-light">Search Magic Cards</h2>
              <SearchForm />
              <CardList foundCards = {this.props.cards} /> */}
              <Switch>
                <AuthenticatedRoute path='/user_id/:user_id/decks' component={ListofDecks} /> 
                <Route path='/' component={LoginForm}/>
              </Switch>
              </div>
          </div> 
=======
          <DeckView />
>>>>>>> working without redux yet
      </div>
    </BrowserRouter>
    )}
};

const mapStateToProps = ({ cards }) => ({ cards });

const mapDispatchToProps = dispatch => 
bindActionCreators({
  verifyUser,
}, dispatch)

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(App);

=======
export default connect(mapStateToProps, null)(App)
>>>>>>> working without redux yet
