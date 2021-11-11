import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "components/forms";
import Button from "components/buttons/Button";
import { addTicketFormValidation } from "schemas/addTicketFormSchema";

const AddTicketForm = ({ initialState, onSubmit = () => {} }) => {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={addTicketFormValidation}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        handleBlur,
        isSubmitting,
        isValid,
        errors,
        touched,
      }) => {
        return (
          <Form onSubmit={handleSubmit} className="mb-4">
            <TextField
              placeholder="Enter subject"
              id="subject"
              label="Subject"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
            />
            {touched.subject && errors.subject && (
              <p className="text-danger">{errors.subject}</p>
            )}
            <TextField
              type="date"
              placeholder="Enter Date"
              id="date"
              label="Date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            />
            {touched.date && errors.date && (
              <p className="text-danger">{errors.date}</p>
            )}
            <div className="form-group">
              <label htmlFor="details">Details</label>
              <textarea
                className="form-control"
                name="details"
                id="details"
                cols="30"
                rows="10"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.details}
              ></textarea>
            </div>
            {touched.details && errors.details && (
              <p className="text-danger">{errors.details}</p>
            )}
            <Button
              disabled={!isValid || isSubmitting}
              variant="info"
              type="submit"
              block
            >
              Add Ticket
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddTicketForm;
