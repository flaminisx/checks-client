import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { signIn as signInAction } from '../../actions/userActions';


const LoginPage = (props) => {
  const submit = (data) => {
    props.signIn(data.email, data.password);
  }
  return (
    <div className="login">
      <LoginForm onSubmit={submit}/>
    </div>
  )
}

export default connect(null, {
  signIn: signInAction
})(LoginPage);
