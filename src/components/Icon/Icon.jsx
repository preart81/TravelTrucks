import icons from '../../img/sprite.svg';

const Icon = ({
  name,
  width = 20,
  height = 20,
  color = '',
  onClick = undefined,
}) => {
  return (
    <svg width={width} height={height} color={color} onClick={onClick}>
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
