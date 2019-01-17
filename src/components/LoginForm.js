import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAuthentication, login } from '../actions/authentication';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.props.login(event.target.loginName.value, event.target.loginPassword.value,
            () => this.props.history.push(`/user_id/${this.props.userId}/decks`))

    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-6">
                <form onSubmit={this.handleLogin}>
                    <h2>Login</h2>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="loginName">User Name</label>
                            <input type="text" className="form-control form-control-sm" name="loginName" id="loginName" placeholder="Your User Name"/>
                        </div>
                    </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label for="loginPassword">Password</label>
                                <input type="password" className="form-control form-control-sm" name="loginPassword" id="loginPassword" placeholder="Password"/>
                            </div>
                        </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </div>
                <div className="col-6">
                    <form>
                        <h2>New Account</h2>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label for="createUser">User Name</label>
                                <input type="text" className="form-control form-control-sm" id="createUser" placeholder="Enter User Name"/>
                            </div>
                        </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="createPassword">Password</label>
                                    <input type="password" className="form-control form-control-sm" id="createPassword" placeholder="Enter Password"/>
                                </div>
                            </div>
                        <button type="submit" className="btn btn-primary">Create Account</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.auth.userId
  })
  
  const mapDispatchToProps = dispatch => 
    bindActionCreators({
      setAuthentication,
      login
    }, dispatch)
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))