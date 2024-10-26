import clsx from 'clsx';
import { Link } from 'react-router-dom';
import css from './ButtonLink.module.css';

const ButtonLink = ({ to, children, red = true }) => {
  return (
    <Link to={to} className={clsx(css.link, red ? css.red : css.white)}>
      {children}
    </Link>
  );
};

export default ButtonLink;
