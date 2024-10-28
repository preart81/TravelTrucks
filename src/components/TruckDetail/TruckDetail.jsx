import clsx from 'clsx';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchOneTruck } from '../../redux/trucks/operations';
import {
  selectCurrentTruck,
  selectError,
  selectLoading,
} from '../../redux/trucks/selectors';
import BookingForm from '../BookingForm/BookingForm';
import DocumentTitle from '../DocumentTitle';
import NotFound from '../NotFound/NotFound';
import ReviewsAndLocation from '../ReviewsAndLocation/ReviewsAndLocation';
import css from './TruckDetail.module.css';
import Loader from '../Loader/Loader';

const TruckDetail = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneTruck(id));
  }, [dispatch, id]);

  //TODO const location = useLocation();
  //TODO const backLinkHref = location.state ?? '/catalog';

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const truck = useSelector(selectCurrentTruck);

  if (error) {
    return <NotFound>{error}</NotFound>;
  }

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, 'h3', isActive && css.active);
  };
  return (
    <>
      <DocumentTitle>
        TravelTrucks{truck.name ? `: ${truck.name}` : ''}
      </DocumentTitle>
      {isLoading && <Loader />}
      {truck.id && (
        <div className={css.container}>
          <div className={css.truckInfo}>
            <h2>{truck.name}</h2>

            <ReviewsAndLocation truck={truck} />
            <p className={clsx(css.price, 'h2')}>€{truck.price.toFixed(2)}</p>

            <ul className={css.truckGallery}>
              {truck.gallery?.map((image, index) => (
                <li key={index}>
                  <img
                    className={css.truckImg}
                    src={image.thumb}
                    alt={truck.name}
                    width={292}
                  />
                </li>
              ))}
            </ul>
            <p className={css.description}>{truck.description}</p>
          </div>
          <nav className={css.nav}>
            <NavLink
              to={`features`}
              //TODO state={backLinkHref}
              replace
              className={buildLinkClass}
            >
              Features
            </NavLink>
            <NavLink
              to={`reviews`}
              //TODO state={backLinkHref}
              replace
              className={buildLinkClass}
            >
              Reviews
            </NavLink>
          </nav>
          <hr className={'divider'} />
          <div className={css.bottomContainer}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
            <BookingForm />
          </div>
        </div>
      )}
    </>
  );
};

export default TruckDetail;
