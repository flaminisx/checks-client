import React from 'react';
import LoginForm from '../forms/LoginForm';


const submit = (data) => {
  console.log(data);
}

const LoginPage = (props) => (
  <div className="login">
    <LoginForm onSubmit={submit}/>
  </div>
)

export default LoginPage;
