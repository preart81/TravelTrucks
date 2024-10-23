import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
