import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};
