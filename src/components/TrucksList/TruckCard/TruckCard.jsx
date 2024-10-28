import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../../redux/favorites/selectors';
import { toggleFavorite } from '../../../redux/favorites/slice';
import ButtonLink from '../../ButtonLink/ButtonLink';
import EquipmentBudges from '../../EquipmentBudges/EquipmentBudges';
import Icon from '../../Icon/Icon';
import ReviewsAndLocation from '../../ReviewsAndLocation/ReviewsAndLocation';
import css from './TruckCard.module.css';

const TruckCard = ({ truck }) => {
  const parameters = [
    'transmission',
    'engine',
    'AC',
    'kitchen',
    'TV',
    'radio',
    'bathroom',
    'refrigerator',
    'microwave',
    'gas',
    'water',
  ];

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(truck.id);

  const dispatch = useDispatch();
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(truck.id));
  };

  return (
    <>
      <img
        className={css.truckImg}
        src={truck.gallery[0].thumb}
        alt={truck.name}
        width={292}
      />

      <div className={css.truckInfo}>
        <div className={css.infoTitleContainer}>
          <div className={clsx(css.infoTitle, 'h2')}>
            <h2 className={css.trimText}>{truck.name}</h2>
            <p className={css.price}>
              €{truck.price.toFixed(2)}
              <Icon
                name="heart"
                width={26}
                height={24}
                onClick={handleToggleFavorite}
                color={isFavorite ? 'var(--button)' : 'var(--main)'}
              />
            </p>
          </div>

          <ReviewsAndLocation truck={truck} />
        </div>

        <p className={clsx(css.description, css.trimText)}>
          {truck.description}
        </p>

        <EquipmentBudges truck={truck} parameters={parameters} />
        <ButtonLink to={`/catalog/${truck.id}/features`}>View Truck</ButtonLink>
      </div>
    </>
  );
};

export default TruckCard;
