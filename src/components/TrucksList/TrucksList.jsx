import { useSelector } from 'react-redux';
import { selectAllTrucks, selectLoading } from '../../redux/trucks/selectors';
import Loader from '../Loader/Loader';
import TruckCard from './TruckCard/TruckCard';
import css from './TrucksList.module.css';

const TrucksList = () => {
  const trucks = useSelector(selectAllTrucks);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <ul className={css.catalog}>
        {isLoading && <Loader />}
        {trucks.map(truck => (
          <li key={truck.id} className={css.card}>
            <TruckCard truck={truck} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrucksList;
