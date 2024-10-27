import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import css from './ReviewsAndLocation.module.css';

const ReviewsAndLocation = ({ truck }) => {
  return (
    <p className={css.details}>
      <span className={clsx(css.details, css.detailsSpan)}>
        <Icon name="star" width={16} height={16} color="var(--rating)" />

        <Link to={`/catalog/${truck.id}/reviews`} className={css.link}>
          {truck.rating}({truck.reviews.length} Reviews)
        </Link>
      </span>
      <span className={clsx(css.details, css.detailsSpan)}>
        <Icon name="location" width={16} height={16} /> {truck.location}
      </span>
    </p>
  );
};

export default ReviewsAndLocation;
