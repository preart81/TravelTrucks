import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucks } from '../../redux/trucks/operations';
import {
  selectAllTrucks,
  selectCurrentPage,
  selectError,
  selectItemsPerPage,
  selectLoading,
  selectTotalItems,
} from '../../redux/trucks/selectors';
import { setCurrentPage } from '../../redux/trucks/slice';
import Loader from '../Loader/Loader';
import TruckCard from './TruckCard/TruckCard';
import css from './TrucksList.module.css';

const TrucksList = () => {
  const dispatch = useDispatch();

  const trucks = useSelector(selectAllTrucks);

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const filters = useSelector(state => state.filter);

  const totalItems = useSelector(selectTotalItems);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  return (
    <section className={css.listSection}>
      <ul className={css.catalog}>
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
      {currentPage * itemsPerPage < totalItems && !isLoading && (
        <button
          type="button"
          className={clsx(css.loadMore, 'buttonWhite')}
          onClick={() => {
            if (trucks.length < totalItems) {
              const nextPage = currentPage + 1;
              dispatch(setCurrentPage(nextPage));
              dispatch(fetchTrucks(nextPage));
            }
          }}
        >
          Load more
        </button>
      )}
      {isLoading && <Loader />}
    </section>
  );
};

export default TrucksList;
