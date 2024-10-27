import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import * as Yup from 'yup';
import css from './BookingForm.module.css';
import './react-datepicker.css';

const BookingForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    date: Yup.date().required('Booking date is required'),
    comment: Yup.string(),
  });

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={css.containerBooking}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ name: '', email: '', date: '', comment: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('Form values:', values);
          resetForm();
          setSelectedDate(null);
        }}
      >
        {({ setFieldValue }) => (
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
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.fieldContainer}>
              <DatePicker
                formatWeekDay={nameOfDay =>
                  nameOfDay.substr(0, 3).toUpperCase()
                }
                dateFormat={'dd/MM/yyyy'}
                minDate={new Date()}
                calendarStartDay={1}
                selected={selectedDate}
                onChange={date => {
                  setSelectedDate(date);
                  setFieldValue('date', date);
                }}
                placeholderText="Booking Date*"
                className={css.input}
                style={{}}
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

            <button
              type="submit"
              className="submitButton"
              style={{ marginTop: '4px' }}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
