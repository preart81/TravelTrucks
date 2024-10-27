import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectCurrentTruck } from '../../redux/trucks/selectors';
import Avatar from '../Avatar/Avatar';
import Rating from '../Rating/Rating';
import css from './TruckReviews.module.css';

const TruckReviews = () => {
  const truck = useSelector(selectCurrentTruck);
  const reviews = truck.reviews || [];
  console.log(reviews);
  return (
    <div className={css.containerReviews}>
      <ul className={css.reviews}>
        {reviews.map(review => {
          const name = review.reviewer_name;
          const rating = review.reviewer_rating;
          const comment = review.comment;
          return (
            <li key={review.id} className={css.review}>
              <div className={css.person}>
                <Avatar name={name} />
                <p className={clsx(css.name, 'Body2')}>{name}
                <Rating rating={rating} />
                </p>
              </div>

              <p className={clsx(css.comment, 'Body')}>{comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TruckReviews;
