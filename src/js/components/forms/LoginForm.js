import React from 'react';
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
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
const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit} className="userform">
    <Paper className="userform__container" elevation={4}>
      <Typography variant="display2" gutterBottom align="center">Sing In</Typography>
      <div className="userform__fields">
        <Field
          name="email"
          component={renderTextField}
          label="Email"
          className="userform__field"
          style={style.field}
          props={{
            inputProps: {type: 'email'},
            fullWidth: true,
            autoFocus: true
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
        <Button
          variant="raised"
          color="primary"
          style={style.button}
          onClick={props.handleSubmit}>
            Submit
        </Button>
      </div>
    </Paper>
  </form>
)

export default reduxForm({
  form: 'login'
})(LoginForm);


// <TextField
//   label="Email"
//   value={"1"}
//   onChange={props}
//   margin="normal"
//   inputProps={{type: 'email'}}
// />
