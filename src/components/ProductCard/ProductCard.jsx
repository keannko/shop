import s from './ProductCard.module.scss'

const ProductCard = (props) => {
  return (
    <>
      <div className={s.wrapper}>
        <div>{props.data.brand}</div>
        <div>{props.data.model}</div>
      </div> 
    </>
  );
};

export default ProductCard;
