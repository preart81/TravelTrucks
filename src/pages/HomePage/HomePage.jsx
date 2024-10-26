import ButtonLink from '../../components/ButtonLink/ButtonLink';
import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <DocumentTitle>TravelTrucks: Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.subtitle} style={{ marginBottom: '56px' }}>
          You can find everything you want in our catalog
        </p>
        <ButtonLink to="/catalog" white={0}>
          View Now
        </ButtonLink>
      </div>
    </>
  );
}
