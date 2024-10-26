import clsx from 'clsx';
import { Field, Formik } from 'formik';
import icons from '../../img/sprite.svg';
import Icon from '../Icon/Icon';
import css from './Filter.module.css';

const Filter = () => {
  const equipmentOptions = [
    { name: 'AC', parameter: 'AC' },
    { name: 'Automatic', parameter: 'transmission' },
    { name: 'Kitchen', parameter: 'kitchen' },
    { name: 'TV', parameter: 'TV' },
    { name: 'Bathroom', parameter: 'bathroom' },
  ];

  const vehicleOptions = [
    { name: 'Van', icon: 'panelTruck' },
    { name: 'Fully Integrated', icon: 'fullyIntegrated' },
    { name: 'Alcove', icon: 'alcove' },
  ];

  return (
    <div className={css.filterContainer}>
      {/* <p style={{ color: 'var(--gray)' }}>Location</p> */}
      <Formik
        initialValues={{ location: '', equipment: [], vehicleType: '' }}
        onSubmit={values => {
          console.log('Form values:', values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="location" className={css.inputLabel}>
              Location
            </label>
            <div className={css.inputWrapper}>
              <svg width={20} height={20} className={css.inputIcon}>
                <use href={`${icons}#icon-location`} />
              </svg>
              <input
                id="location"
                type="text"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                className={css.input}
                placeholder="Location"
              />
            </div>

            <p className={css.filterTitle}>Filters</p>

            {/* Vehicle equipment checkboxes ------------------------------ */}
            <p className={clsx(css.equipmentTitle, 'h3')}>Vehicle equipment</p>
            <hr className={css.devider} />
            <div className={css.checkboxGrid}>
              {equipmentOptions.map(option => (
                <label
                  key={option.name}
                  className={clsx(
                    'button',
                    css.checkboxLabel,
                    values.equipment.includes(option.name) ? css.active : ''
                  )}
                >
                  <Field
                    type="checkbox"
                    name="equipment"
                    value={option.name}
                    className={css.hidden}
                  />
                  <Icon name={option.parameter} width={32} height={32} />
                  <span style={{ userSelect: 'none' }}>{option.name}</span>
                </label>
              ))}
            </div>

            {/* Vehicle type checkboxes ----------------------------------- */}
            <p className={clsx(css.equipmentTitle, 'h3')}>Vehicle type</p>
            <hr className={css.devider} />
            <div className={css.checkboxGrid}>
              {vehicleOptions.map(option => (
                <label
                  key={option.name}
                  className={clsx(
                    'button',
                    css.checkboxLabel,
                    values.vehicleType === option.name ? css.active : ''
                  )}
                >
                  <Field
                    type="radio"
                    name="vehicleType"
                    value={option.name}
                    className={css.hidden}
                  />
                  <Icon name={option.icon} width={32} height={32} />
                  <span style={{ userSelect: 'none' }}>{option.name}</span>
                </label>
              ))}
            </div>

            <button type="submit" className={css.submitButton}>
              Search
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Filter;
