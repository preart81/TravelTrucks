import Icon from "../Icon/Icon";
import css from "./Rating.module.css";

const Rating = ({ rating }) => {
  return (
    <span className={css.rating}>
      {[...Array(5)].map((_, i) => (
        <Icon
          key={i}
          name="star"
          width={16}
          height={16}
          color={rating > i ? 'var(--rating)' : 'var(--badges)'}
        />
      ))}
    </span>
  );
};

export default Rating;
