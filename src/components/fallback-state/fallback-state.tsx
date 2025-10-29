import { Link } from 'react-router-dom';
import { AppRouteValue } from '../../types/router.type';
import './fallback-state.css';

export type FallbackStateProps = {
  title?: string,
  message?: string,
  actionLabel?: string,
  actionHref?: AppRouteValue,
  onAction?: () => void,
}

function FallbackState({ title = 'Нет доступных товаров', message = 'Здесь пока ничего нет', actionLabel, actionHref, onAction }: FallbackStateProps): JSX.Element {
  return (
    <div className="page-content page-content--fallback">
      <div className="container">
        <h1 className="title title--h2">{title}</h1>
        {message && <p className="error-message">{message}</p>}
        {onAction
          ? <button className="btn btn--purple" type="button" onClick={onAction}>{actionLabel}</button>
          : actionHref
            ? <Link className="btn btn--purple" to={actionHref}>{actionLabel}</Link>
            : null}
      </div>
    </div>
  );
}

export default FallbackState;
