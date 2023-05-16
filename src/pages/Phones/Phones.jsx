import { NavLink } from "react-router-dom";

const Phones = () => {
  return (
    <>
      <div>
        <NavLink to="#">Samsung</NavLink>
        <NavLink to="#">LG</NavLink>
        <NavLink to="#">Google Pixel</NavLink>
        <NavLink to="#">IPhone</NavLink>
        <NavLink to="#">Xiaomi</NavLink>
        <NavLink to="#">accessories</NavLink>
      </div>
    </>
  );
};

export default Phones;
