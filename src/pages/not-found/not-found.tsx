import { Link } from 'react-router-dom';
import './not-found.style.css';
import { AppRoute } from '../../constants/router';

function NotFound(): JSX.Element {
  return (
    <div className="page-content page-content--not-found">
      <div className="container">
        <h1 className="title title--h2">404 Страница не найдена</h1>
        <Link className="btn btn--purple" to={AppRoute.Root}>Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default NotFound;
