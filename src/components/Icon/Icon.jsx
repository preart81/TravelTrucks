import icons from '../../img/sprite.svg';

const Icon = ({ name, width = 20, height = 20, color='' }) => {
  return (
    <svg width={width} height={height} color={color}>
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
