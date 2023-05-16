import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import s from './Categories.module.scss';

function Categories(props) {
  const products = useSelector((state) => state.products.products);

  const handleProducts = (product) => (
    <div key={product.id}>
      <ProductCard data={product} />
    </div>
  );

  return (
    <>
      <div>
        <NavLink to="/phones">Смартфони</NavLink>
        <NavLink to="/phones">Годинники</NavLink>
        <NavLink to="/phones">Аксесуари</NavLink>
      </div>
      <div className={s.cardWrapper}>{products.map(handleProducts)}</div>
    </>
  );
}

export default Categories;
