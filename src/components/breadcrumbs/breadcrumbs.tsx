import { useLocation } from "react-router";
import { AppRoute } from "../../constants/router";
import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../../hooks/use-breadcrumbs";

type BreadcrumbsProps = {
  productName?: string;
}

function Breadcrumbs({ productName }: BreadcrumbsProps): JSX.Element {
  const { pathname } = useLocation();

  const pathParts = pathname === AppRoute.Root ? ['/'] : ['/', ...pathname.split('/').filter((path) => path)];
  const breadcrumbs = useBreadcrumbs(pathParts, productName);

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {breadcrumbs.map(({ name, route }, index) => (
            <li key={name} className="breadcrumbs__item">
              {index < breadcrumbs.length - 1 ? (
                <Link className="breadcrumbs__link" to={route}>{name}
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>
                </Link>
              ) : (
                <span className="breadcrumbs__link breadcrumbs__link--active">{name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumbs;
