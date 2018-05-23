import React from 'react';
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const style = {
  field: { marginTop: 20 },
  button: { margin: "auto", marginTop: 30, display: 'block'}
}
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    {...input}
    {...custom}
  />
)
const RegisterForm = (props) => (
  <form onSubmit={props.handleSubmit} className="userform">
    <Paper className="userform__container" elevation={4}>
      <Typography variant="display2" gutterBottom align="center">Registration</Typography>
      <div className="userform__fields">
        <Field
          name="name"
          component={renderTextField}
          label="Name"
          className="userform__field"
          style={style.field}
          props={{
            fullWidth: true,
            autoFocus: true
          }}/>
        <Field
          name="email"
          component={renderTextField}
          label="Email"
          className="userform__field"
          style={style.field}
          props={{
            inputProps: {type: 'email'},
            fullWidth: true
          }}/>
        <Field
          name="password"
          component={renderTextField}
          label="Password"
          className="userform__field"
          style={style.field}
          props={{
            inputProps: {type: 'password'},
            fullWidth: true
          }}/>
        <Field
          name="password_confirmation"
          component={renderTextField}
          label="Repeat password"
          className="userform__field"
          style={style.field}
          props={{
            inputProps: {type: 'password'},
            fullWidth: true
          }}/>
        <Button
          variant="raised"
          color="primary"
          style={style.button}
          onClick={props.handleSubmit}>
            Submit
        </Button>
      </div>
      <div className="userform__link">
        <Typography gutterBottom align="center">
          <span>Have an account? </span>
          <Link to='/login'>Sing in now!</Link>
        </Typography>
      </div>
    </Paper>
  </form>
)

export default reduxForm({
  form: 'register'
})(RegisterForm);
