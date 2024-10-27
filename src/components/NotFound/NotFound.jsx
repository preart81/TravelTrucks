import clsx from 'clsx';
import css from './NotFound.module.css';

const NotFound = ({ children }) => {
  return (
    <div className={css.container}>
      {/*  */}
      <p className={clsx(css.title,'h2')}>Track not found</p>
      <p className={clsx(css.text, 'h3')}>{children}</p>
    </div>
  );
};

export default NotFound;
