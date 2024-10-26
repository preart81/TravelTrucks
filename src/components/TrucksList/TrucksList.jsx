import { useSelector } from 'react-redux';
import { selectAllTrucks } from '../../redux/trtucks/selectors';
import TruckCard from './TruckCard/TruckCard';
import css from './TrucksList.module.css';

const TrucksList = () => {
  const trucks = useSelector(selectAllTrucks);
  console.log(trucks);

  return (
    <>
      <ul className={css.catalog}>
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
