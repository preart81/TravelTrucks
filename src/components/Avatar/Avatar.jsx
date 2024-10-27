import clsx from 'clsx';
import css from './Avatar.module.css';

const Avatar = ({ name }) => {
  const letter = name[0].toUpperCase();
  return <span className={clsx(css.avatar, 'h2')}>{letter}</span>;
};

export default Avatar;
