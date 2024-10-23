import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <DocumentTitle>TravelTrucks:Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Link to="/catalog" className={css.link}>
          View Now
        </Link>
      </div>
    </>
  );
}
