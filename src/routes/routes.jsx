import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import MainPage from '../pages/MainPage/MainPage';
import Phones from '../pages/Phones/Phones';
import Categories from '../pages/Categories/Categories';
import LoginModal from '../components/LoginModal/LoginModal';
import Cabinet from '../pages/Cabinet/Cabinet';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/cabinet" element={<Cabinet />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
