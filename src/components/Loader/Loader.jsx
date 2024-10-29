import { BeatLoader } from 'react-spinners';

const Loader = () => {
  return (
    <BeatLoader
      color="var(--button)"
      size={20}
      speedMultiplier={2.2}
      // cssOverride={{ position: 'absolute', left: '50%', top: '50%' }}
      cssOverride={{ margin: '0 auto', width: 'max-content' }}
    />
  );
};

export default Loader;
