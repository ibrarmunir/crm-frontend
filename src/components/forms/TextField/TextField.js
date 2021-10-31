import React from 'react';
import Form from 'react-bootstrap/Form'

const TextField = ({ type, value, placeholder, id, label, onChange = () => {}, onBlur= () => {}}) => {
    return (
        <Form.Group>
            <Form.Label htmlFor={id}>{ label }</Form.Label>
            <Form.Control type={type} name={id} placeholder={placeholder} id={id} onChange={onChange} onBlur={onBlur}></Form.Control>
        </Form.Group>
    )
}

export default TextField
