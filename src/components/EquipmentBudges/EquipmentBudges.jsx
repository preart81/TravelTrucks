import { capitalizeFirstLetter } from '../../js/utils';
import Icon from '../Icon/Icon';
import css from './EquipmentBudges.module.css';

const EquipmentBudges = ({
  truck,
  parameters = [
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
  ],
}) => {
  return (
    <>
      <ul className={css.truckEquipment}>
        {parameters.map(parameter => {
          const text =
            typeof truck[parameter] !== 'boolean'
              ? truck[parameter]
              : parameter;
          return (
            truck[parameter] && (
              <li key={parameter} className={css.budge}>
                <Icon name={parameter} />
                {capitalizeFirstLetter(text)}
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};

export default EquipmentBudges;
