import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { setStatus } from "../../redux/modal.slice/modalSlice";
import LoginModal from "../LoginModal/LoginModal";
import s from "./Layout.module.scss";

const Layout = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.modal.isOpened);
  const isAuth = useSelector((state) => state.modal.isAuth);

  const handleLoginClick = () => {
    dispatch(setStatus());
  };
  return (
    <>
      {status && <LoginModal />}
      <header className={s.headerWrapper}>
        <div>
          <img src="./icons8-redux.svg" alt="" />
        </div>
        <div className={s.linksWrapper}>
          <Link to="/">Головна</Link>
          <Link to="/categories">Магазин</Link>
          <Link to="/">Про нас</Link>
        </div>
        <div className={s.imagesBlock}>
          {isAuth ? (
            <div>
              <button>Мій кабінет</button>
              <button>Вийти</button>
            </div>
          ) : (
            <img
              className={s.loginImage}
              src="./icon_login.svg"
              alt="loginImage"
              onClick={() => handleLoginClick()}
            />
          )}
          <img src="./icon_store.svg" alt="" />
          <img src="./cartBlack.svg" alt="" />
        </div>
      </header>
      <div className={s.outlet}><Outlet /></div>
      <footer className={s.footerWrapper}>footer --- 2023</footer>
    </>
  );
};

export default Layout;
