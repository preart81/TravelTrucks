import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        <img src="/Logo.svg" alt="TravelTrucks" width="136px" />
      </Link>
      <Navigation />
    </header>
  );
};
