import clsx from 'clsx';
import { useSelector } from 'react-redux';
import {
  addSpaceBeforeUnits,
  capitalizeFirstLetter,
  formName,
} from '../../js/utils';
import { selectCurrentTruck } from '../../redux/trucks/selectors';
import EquipmentBudges from '../EquipmentBudges/EquipmentBudges';
import css from './TruckFeatures.module.css';

const TruckFeatures = () => {
  const truck = useSelector(selectCurrentTruck);
  const vehicleDetails = [
    { apiName: 'form' },
    { apiName: 'length' },
    { apiName: 'width' },
    { apiName: 'height' },
    { apiName: 'tank' },
    { apiName: 'consumption' },
  ];

  return (
    <div className={css.containerFeatures}>
      <div className={css.budges}>
        <EquipmentBudges
          truck={truck}
          // parameters={parameters}
        />
      </div>

      <div className={css.details}>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <hr className="divider" />

        <ul className={clsx(css.detaileGrid, 'Body2')}>
          {vehicleDetails.map(parameter => {
            const name = parameter.apiName
              ? capitalizeFirstLetter(parameter.apiName)
              : '';
            let value = truck[parameter.apiName] || '';

            // change value if parameter is form
            if (parameter.apiName === 'form' && value) {
              value = formName[value] || capitalizeFirstLetter(value);
            } else if (value) {
              value = addSpaceBeforeUnits(capitalizeFirstLetter(value));
            }
            return (
              <li key={parameter.apiName} className={css.detailsText}>
                <p>{name}</p>
                <p>{formName[value] || value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TruckFeatures;
