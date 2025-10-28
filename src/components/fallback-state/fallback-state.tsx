import './fallback-state.css';

type FallbackStateProps = {
  title?: string,
  message?: string,
  actionLabel?: string,
  onAction?: () => void,
}

function FallbackState({ title = 'Нет доступных товаров', message = 'Здесь пока ничего нет', actionLabel, onAction }: FallbackStateProps): JSX.Element {
  return (
    <div className="page-content page-content--fallback">
      <div className="container">
        <h1 className="title title--h3">{title}</h1>
        {message && <p className="error-message">{message}</p>}
        {onAction && <button className="btn btn--purple" type="button" onClick={onAction}>{actionLabel}</button>}
      </div>
    </div>
  );
}

export default FallbackState;
