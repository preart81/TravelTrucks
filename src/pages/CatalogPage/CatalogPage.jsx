import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import Filter from '../../components/Filter/Filter';
import TrucksList from '../../components/TrucksList/TrucksList';
import {
  selectFilterEquipment,
  selectFilterLocation,
  selectFilterVehicleType,
} from '../../redux/filter/selectors';
import { fetchTrucks } from '../../redux/trucks/operations';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();

  const filterLocation = useSelector(selectFilterLocation);
  const filterEquipment = useSelector(selectFilterEquipment);
  const filterVehicleType = useSelector(selectFilterVehicleType);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch, filterLocation, filterEquipment, filterVehicleType]);

  return (
    <>
      <DocumentTitle>TravelTrucks: Cataog</DocumentTitle>

      <div className={css.container}>
        <Filter />
        <TrucksList />
      </div>
    </>
  );
}
