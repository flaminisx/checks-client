import React from 'react';
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DatePicker from 'material-ui-pickers/DatePicker';
import * as DateFns from 'date-fns';

const style = {
  field: { marginTop: 20, width: "100%" },
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
const renderDateField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <DatePicker format="D MMM YYYY" {...input} {...custom}/>
);

class renderPeriodField extends React.Component {

  state = {
    years: 0,
    month: 0
  }
  yearChange(e){
    const val = e.target.value;
    const { onChange, value } = this.props.input;
    if(val > 10) return;
    if(!val){
      this.setState({ years: 0 })
    }else {
      this.setState({ years: parseInt(val) })
    }
    onChange(val * 31536000 + this.state.month * 2592000)
    // console.log(this.props);
  }
  monthChange(e){
    const val = e.target.value;
    const { onChange, value } = this.props.input;
    if(val >= 12) return;
    if(!val){
      this.setState({ month: 0 })
    }else {
      this.setState({ month: parseInt(val) })
    }
    onChange(this.state.years * 31536000 + val * 2592000)

  }
  render(){
    const {
      input,
      label,
      meta: { touched, error },
      ...custom
    } = this.props;
    const { years, month } = this.state;
    return (
      <div className={`${custom.className} period`}>
        <TextField label='Years' onChange={this.yearChange.bind(this)} value={years}/>
        <TextField label='Month' onChange={this.monthChange.bind(this)} value={month}/>
      </div>
    );
  }
}

const ProductForm = (props) => (
  <Dialog
    open={props.open}
    onClose={props.close}
    >
    <DialogTitle id="form-dialog-title">Add product</DialogTitle>
    <DialogContent>
      <form onSubmit={props.handleSubmit} className="productform">
          <div className="productform__fields">
            <Field
              name="title"
              component={renderTextField}
              label="Title"
              className="productform__field"
              style={style.field}
              props={{
                inputProps: {type: 'text'},
                fullWidth: true,
                autoFocus: true
              }}/>
            <Field
              name="purchased_at"
              component={renderDateField}
              label="Purchase date"
              className="productform__field"
              style={style.field}
              />
            <Field
              name="warranty_time"
              component={renderPeriodField}
              label="Warranty time"
              className="productform__field"
              style={style.field}
              />

            <Button
              variant="raised"
              color="primary"
              style={style.button}
              onClick={props.handleSubmit}>
                Submit
            </Button>
          </div>
      </form>
    </DialogContent>
  </Dialog>
)

export default reduxForm({
  form: 'product',
  initialValues: {'purchased_at': new Date()}
})(ProductForm);
