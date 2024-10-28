import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucks } from '../../redux/trucks/operations';
import {
  selectAllTrucks,
  selectError,
  selectLoading,
} from '../../redux/trucks/selectors';
import Loader from '../Loader/Loader';
import TruckCard from './TruckCard/TruckCard';
import css from './TrucksList.module.css';
import clsx from 'clsx';

const TrucksList = () => {
  const trucks = useSelector(selectAllTrucks);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const filters = useSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch, filters]);

  return (
    <>
      <ul className={css.catalog}>
        {filters && <p></p>}
        {isLoading && <Loader />}
        {isError ? (
          <p className={clsx(css.card, 'h2', css.notFound)}>Not found</p>
        ) : (
          trucks.map(truck => (
            <li key={truck.id} className={css.card}>
              <TruckCard truck={truck} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default TrucksList;
