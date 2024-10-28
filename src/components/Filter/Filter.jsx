import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../img/sprite.svg';
import { equipmentOptions } from '../../js/utils';
import {
  selectFilterEquipment,
  selectFilterLocation,
  selectFilterVehicleType,
} from '../../redux/filter/selectors';
import {
  setFilterEquipment,
  setFilterLocation,
  setFilterVehicleType,
} from '../../redux/filter/slice';
import { fetchAllTrucks } from '../../redux/trucks/operations';
import { selectAllLocations } from '../../redux/trucks/selectors';
import Icon from '../Icon/Icon';
import css from './Filter.module.css';

const Filter = () => {
  const vehicleOptions = [
    { name: 'Van', form: 'panelTruck' },
    { name: 'Fully Integrated', form: 'fullyIntegrated' },
    { name: 'Alcove', form: 'alcove' },
  ];

  const allLocations = useSelector(selectAllLocations);
  const filterLocation = useSelector(selectFilterLocation);
  const filterEquipment = useSelector(selectFilterEquipment);
  const filterVehicleType = useSelector(selectFilterVehicleType);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucks());
  }, [dispatch]);

  return (
    <div className={css.filterContainer}>
      {/* <p style={{ color: 'var(--gray)' }}>Location</p> */}
      <Formik
        initialValues={{
          location: filterLocation || '',
          equipment: filterEquipment || [],
          vehicleType: filterVehicleType || '',
        }}
        onSubmit={values => {
          dispatch(setFilterLocation(values.location));
          dispatch(setFilterEquipment(values.equipment));
          dispatch(setFilterVehicleType(values.vehicleType));
        }}
      >
        {({ values, handleChange, handleBlur, setFieldValue }) => (
          <Form>
            {/* Vehicle location  ------------------------------------------ */}
            <label htmlFor="location" className={css.inputLabel}>
              Location
            </label>
            <div className={css.inputWrapper}>
              <svg
                width={20}
                height={20}
                className={css.inputIcon}
                color={values.location ? 'var(--main)' : 'var(--gray)'}
              >
                <use href={`${icons}#icon-location`} />
              </svg>
              <Field
                id="location"
                type="text"
                name="location"
                as="select"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                className={clsx(css.input, css.select)}
                style={{ color: !values.location && 'var(--gray)' }}
                placeholder="City"
              >
                <option value="" style={{ color: 'var(--main)' }}>
                  All locations
                </option>
                {allLocations.map(location => (
                  <option
                    key={location}
                    value={location}
                    style={{ color: 'var(--main)' }}
                  >
                    {location}
                  </option>
                ))}
              </Field>
            </div>

            <p className={css.filterTitle}>Filters</p>

            {/* Vehicle equipment checkboxes ------------------------------ */}
            <p className={clsx(css.equipmentTitle, 'h3')}>Vehicle equipment</p>
            <hr className={'divider'} />
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
                    // name={option.parameter}
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
            <hr className={'divider'} />
            <div className={css.checkboxGrid}>
              {vehicleOptions.map(option => (
                <label
                  key={option.name}
                  className={clsx(
                    'button',
                    css.checkboxLabel,
                    values.vehicleType === option.form ? css.active : ''
                  )}
                >
                  <Field
                    type="radio"
                    name="vehicleType"
                    value={
                      values.vehicleType === option.form ? '' : option.form
                    }
                    className={css.hidden}
                  />
                  <Icon name={option.form} width={32} height={32} />
                  <span style={{ userSelect: 'none' }}>{option.name}</span>
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="submitButton"
              style={{ marginTop: '40px' }}
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filter;
