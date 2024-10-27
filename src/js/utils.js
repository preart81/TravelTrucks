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
