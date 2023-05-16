import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { addProducts } from './redux/products.slice/productsSlice';
import { addUsers } from './redux/users.slice/usersSlice';
import AppRoutes from './routes/routes';

function App() {
  const dispatch = useDispatch();

  const getProductsThunk = () => function (dispatch) {
    fetch('http://localhost:3003/phones')
      .then((response) => response.json())
      .then((data) => {
        dispatch(addProducts(data));
      });
    fetch('http://localhost:3003/users')
      .then((response) => response.json())
      .then((data) => {
        dispatch(addUsers(data));
      });
  };

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <AppRoutes />
  );
}

export default App;
