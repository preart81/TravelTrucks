import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';

const BookingForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    date: Yup.date().required('Booking date is required'),
    comment: Yup.string(),
  });

  return (
    <div className={css.containerBooking}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ name: '', email: '', date: '', comment: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('Form values:', values);
        }}
      >
        <Form className={css.form}>
          <div className={css.fieldContainer}>
            <Field
              name="name"
              type="text"
              placeholder="Name*"
              className={css.input}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.fieldContainer}>
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className={css.input}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.fieldContainer}>
            <Field
              name="date"
              type="date"
              placeholder="Booking Date*"
              className={css.input}
            />
            <ErrorMessage name="date" component="div" className={css.error} />
          </div>

          <div className={css.fieldContainer}>
            <Field
              name="comment"
              as="textarea"
              placeholder="Comment"
              className={css.input}
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit" className="submitButton" style={{ marginTop: '4px' }}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
