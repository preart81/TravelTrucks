import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import TruckDetail from './components/TruckDetail/TruckDetail';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import HomePage from './pages/HomePage/HomePage';
import TruckFeatures from './components/TruckFeatures/TruckFeatures';
import TruckReviews from './components/TruckReviews/TruckReviews';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<TruckDetail />}>
          <Route path="features" element={<TruckFeatures />} />
          <Route path="reviews" element={<TruckReviews />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
