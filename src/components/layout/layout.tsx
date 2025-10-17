import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../constants/router';
import PromoBannerSlider from '../promo-banner/promo-banner-slider';
import FormSearch from '../form-search/form-search';
import Modal from '../modal/modal';

function Layout(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div className="wrapper">
      <header className="header" id="header">
        <div className="container">
          <Link className="header__logo" to={AppRoute.Root} aria-label="Переход на главную">
            <svg width="100" height="36" aria-hidden="true">
              <use xlinkHref="#icon-logo"></use>
            </svg>
          </Link>
          <nav className="main-nav header__main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link className="main-nav__link" to={AppRoute.Root}>Каталог</Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="#">Гарантии</Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="#">Доставка</Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="#">О компании</Link>
              </li>
            </ul>
          </nav>
          <FormSearch />

          <Link className="header__basket-link" to={AppRoute.Basket}>
            <svg width="16" height="16" aria-hidden="true">
              <use xlinkHref="#icon-basket"></use>
            </svg>
          </Link>
        </div>
      </header>

      <main
        style={{
          width: '100vw',
        }}
      >
        {pathname === AppRoute.Root && <PromoBannerSlider />}
        <Outlet />
        <Modal />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <Link className="footer__logo" to={AppRoute.Root} aria-label="Переход на главную">
              <svg width="100" height="36" aria-hidden="true">
                <use xlinkHref="#icon-logo-mono"></use>
              </svg>
            </Link>
            <p className="footer__description">Интернет-магазин фото- и видеотехники</p>
            <ul className="social">
              <li className="social__item">
                <a className="link" href="#" aria-label="Переход на страницу вконтатке">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-vk"></use>
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a className="link" href="#" aria-label="Переход на страницу pinterest">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-pinterest"></use>
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a className="link" href="#" aria-label="Переход на страницу reddit">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-reddit"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <ul className="footer__nav">
            <li className="footer__nav-item">
              <p className="footer__title">Навигация</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="link" to={AppRoute.Root}>Каталог
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Гарантии
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">Доставка
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="link" to="#">О компании
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <p className="footer__title">Ресурсы</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="link" href="#">Курсы операторов
                  </a>
                </li>
                <li className="footer__item">
                  <a className="link" href="#">Блог
                  </a>
                </li>
                <li className="footer__item">
                  <a className="link" href="#">Сообщество
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <p className="footer__title">Поддержка</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="link" href="#">FAQ
                  </a>
                </li>
                <li className="footer__item">
                  <a className="link" href="#">Задать вопрос
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
