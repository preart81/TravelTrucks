import clsx from 'clsx';
import { Suspense } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import css from './TruckDetail.module.css';

const TruckDetail = () => {
  //TODO const location = useLocation();
  //TODO const backLinkHref = location.state ?? '/catalog';
  const id = useParams().id;

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <div>TruckDetail {id}</div>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default TruckDetail;
