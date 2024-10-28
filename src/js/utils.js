import icons from '../img/sprite.svg';

export function capitalizeFirstLetter(name) {
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : '';
}

export function addSpaceBeforeUnits(value) {
  return value.replace(/(\d)(?=\s?(m|l)$)/gi, '$1 ');
}

export const formName = {
  alcove: 'Alcove',
  fullyIntegrated: 'Fully Integrated',
  panelTruck: 'Van',
};

export const getIcon = name => {
  return `${icons}#${name}`;
};

export const equipmentOptions = [
  { name: 'AC', parameter: 'AC', filter: 'true' },
  { name: 'Automatic', parameter: 'transmission', filter: 'automatic' },
  { name: 'Kitchen', parameter: 'kitchen', filter: 'true' },
  { name: 'TV', parameter: 'TV', filter: 'true' },
  { name: 'Bathroom', parameter: 'bathroom', filter: 'true' },
];
