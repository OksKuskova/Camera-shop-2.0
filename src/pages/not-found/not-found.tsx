import './not-found.style.css';

function NotFound(): JSX.Element {
  return (
    <div className="page-content page-content--not-found">
      <div className="container">
        <h1 className="title title--h2">404 Страница не найдена</h1>
        <button className="btn btn--purple" type="button">Вернуться на главную</button>
      </div>
    </div>
  );
}

export default NotFound;
