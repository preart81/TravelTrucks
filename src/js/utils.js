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

export const getFilterParamsFromStore = ({
  location,
  equipment,
  vehicleType,
}) => {
  // Створюємо об'єкт параметрів
  const params = {};
  if (location) params.location = location;
  // if (equipment) params.equipment = equipment;
  if (equipment && equipment.length > 0) {
    equipment.map(option => {
      params[equipmentOptions.find(e => e.name === option)?.parameter] =
        equipmentOptions.find(e => e.name === option)?.filter;
    });
  }
  if (vehicleType) params.form = vehicleType;
  // console.log(params);

  return params;
};

export const getFiltersFromSearchParams = searchParams => {
  // console.log('searchParams: ', searchParams);
  const filters = {
    location: '',
    equipment: [],
    vehicleType: '',
  };

  // Отримуємо location
  if (searchParams.location) {
    filters.location = searchParams.location;
  }

  // Обробляємо equipment
  for (const [key] of Object.entries(searchParams)) {
    const equipmentOption = equipmentOptions.find(e => e.parameter === key);
    if (equipmentOption) {
      filters.equipment.push(equipmentOption.name);
    }
  }

  // Отримуємо vehicleType
  if (searchParams.form) {
    filters.vehicleType = searchParams.form;
  }

  return filters;
};
