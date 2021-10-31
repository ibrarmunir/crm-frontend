import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import { TextField } from 'components/forms';
import Button from 'components/buttons/Button';
import { useFormik } from 'formik';
import { loginFormSchema } from 'schemas/loginFormSchema';

const initialValues = {
    email: "",
    password: ""
}

const EntryLoginForm = ({ handleLoginFormSubmission, formSwitcher }) => {

    const { values, errors, handleChange, handleBlur, handleSubmit, touched} = useFormik({
        initialValues,
        validationSchema: loginFormSchema,
        onSubmit: handleLoginFormSubmission
    })

    return (
        <Container>
            <Row>
               <Col>
                <h1 className="text-info text-center">Client Login</h1>
                <hr />
                <Form onSubmit={handleSubmit}>
                    <TextField type="email" placeholder="Enter Email" id="email" label="Email Address" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                    { touched.email && errors.email ? <p className="error">{ errors.email }</p> : null}
                    <TextField type="password" placeholder="Enter Password" id="password" label="Password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                    { touched.password && errors.email ? <p className="error">{ errors.password }</p> : null}
                    <Button type="submit">
                        Login
                    </Button>
                </Form>
               </Col> 
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={formSwitcher("reset")}>Forgot Password?</a>
                </Col>
            </Row>
        </Container>
    )
}

export default EntryLoginForm;
