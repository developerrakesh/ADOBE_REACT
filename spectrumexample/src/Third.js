import React from 'react'
import {useButton, useTextField} from 'react-aria';


export function Button(props) {
    let ref = React.useRef();
    let {buttonProps} = useButton(props, ref);
    let {children} = props;
    return (
      <button {...buttonProps} ref={ref}>
        {children}
      </button>
    );
  };

  function TextField(props) {
    let {label} = props;
    let ref = React.useRef();
    let {labelProps, inputProps} = useTextField(props, ref);
  
    return (
     
      <div style={{display: 'flex', flexDirection: 'column', width: 200}}>
        <label {...labelProps}>{label}</label>
        <input {...inputProps} ref={ref} />
      </div>
     
    );
  }

  
export default function Third() {
  return <>
        <TextField label="Email" placeholder="abc@example.com" /> <br />
        <Button onPress={() => alert('Register')}>Register</Button>
        <Button onPress={() => alert('Login')}>Login</Button>
        <button>Plain</button>
    </>
}
