import React from 'react'
import classes from "./EntryPage.module.css";
import Jumbotron from 'react-bootstrap/Jumbotron'
import EntryLoginForm from '../EntryLoginForm/EntryLoginForm';
import ResetForm from '../ResetForm/ResetForm';

export const EntryPage = () => {

    const [loadForm, SetLoadForm] = React.useState('login');

    const handleLoginFormSubmission = (values) => {
        console.log(values);
    }

    const handleResetFormSubmission = (values) => {
        console.log(values)
    }

    const formSwitcher = React.useCallback((type) => {
        return (event) => {
            event.preventDefault();
            SetLoadForm(type);
        }
    },[SetLoadForm])
 
    return (
        <div className={`${classes["entry-page"]} bg-info`}>
            <Jumbotron className={classes["box-form"]}>
                { loadForm === 'login' && <EntryLoginForm handleLoginFormSubmission={handleLoginFormSubmission}
                formSwitcher={formSwitcher} />}
                { loadForm === 'reset' && <ResetForm handleResetFormSubmission={handleResetFormSubmission}
                formSwitcher={formSwitcher} />}
            </Jumbotron>
        </div>
    )
}
