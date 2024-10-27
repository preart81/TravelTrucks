import clsx from 'clsx';
import ButtonLink from '../../ButtonLink/ButtonLink';
import EquipmentBudges from '../../EquipmentBudges/EquipmentBudges';
import Icon from '../../Icon/Icon';
import css from './TruckCard.module.css';

const TruckCard = ({ truck }) => {
  const parameters = [
    'transmission',
    'engine',
    'AC',
    'kitchen',
    // 'TV',
    // 'radio',
    // 'bathroom',
    // 'refrigerator',
    // 'microwave',
    // 'gas',
    // 'water',
  ];
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
            <h2>{truck.name}</h2>
            <p>€{truck.price.toFixed(2)}</p>
          </div>
          <p className={css.details}>
            <span className={clsx(css.details, css.detailsSpan)}>
              <Icon name="star" width={16} height={16} /> {truck.rating}(
              {truck.reviews.length} Reviews)
            </span>
            <span className={clsx(css.details, css.detailsSpan)}>
              <Icon name="location" width={16} height={16} /> {truck.location}
            </span>
          </p>
        </div>

        <p className={css.description}>{truck.description}</p>

        <EquipmentBudges truck={truck} parameters={parameters} />
        <ButtonLink to={`/catalog/${truck.id}/features`}>View Truck</ButtonLink>
      </div>
    </>
  );
};

export default TruckCard;
