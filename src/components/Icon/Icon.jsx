import icons from '../../img/sprite.svg';

const Icon = ({ name, width = 20, height = 20 }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
