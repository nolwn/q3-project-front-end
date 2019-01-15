import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findCards } from '../actions/cards.js';
import { bindActionCreators } from 'redux';

class SearchForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    handleChange = (event) => {
        this.setState({
          name: event.target.value
        })
      };

    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <form className="form-inline my-2 my-lg-0" onSubmit={(event) => { event.preventDefault()
                findCards(this.state.name)}}>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search Books by ID</button>  
                <input className="form-control mr-sm-2" type="search" placeholder="Search" name="bookID" value={this.state.name} onChange={this.handleChange} aria-label="Search"/>
            </form>
        </nav>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      name: state.name
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({findCards}, dispatch)
  }
  export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);