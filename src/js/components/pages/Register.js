import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../forms/RegisterForm';
import { signUp as signUpAction } from '../../actions/userActions';


const RegisterPage = (props) => {
  const submit = (data) => {
    props.signUp(data);
  }
  return (
    <div className="register">
      <RegisterForm onSubmit={submit}/>
    </div>
  )
}

export default connect(null, {
  signUp: signUpAction
})(RegisterPage);
