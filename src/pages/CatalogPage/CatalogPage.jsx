import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import Filter from '../../components/Filter/Filter';
import TrucksList from '../../components/TrucksList/TrucksList';
import { fetchTrucks } from '../../redux/trucks/operations';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

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
