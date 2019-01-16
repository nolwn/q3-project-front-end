import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findCards } from '../actions/cards.js';
import { bindActionCreators } from 'redux';
import SetOptions from './SetLists';

class SearchForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            set: ''
        }
    }

    handleChangeName = (event) => {
        this.setState({
          name: event.target.value
        })
      };

    handleChangeSet = (event) => {
        this.setState({
            set: event.target.value
        })
    }

    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <form className="form-inline my-2 my-lg-0" onSubmit={(event) => { event.preventDefault()
                this.props.findCards(this.state.name, this.state.set)}}>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Find Card By Name</button>  
                <input className="form-control mr-sm-2" type="search" placeholder="Search" name="bookID" value={this.state.name} onChange={this.handleChangeName} aria-label="Search"/>
                <SetOptions name="set" set={this.state.set} changeSet={this.handleChangeSet} />
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