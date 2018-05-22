import React from 'react';
import { Field } from 'redux-form';

import TextField from '@material-ui/core/TextField';


export default (props) => {
  const { input: { onChange, value } } = props
  return(
    <div className="newquestion__row">
      <div className="newquestion__label">{ props.label }</div>
      <div className="newquestion__value">
        <TextInput className="newquestion__textfield" onChange={onChange} value={value}/>
      </div>
    </div>
  )
}
