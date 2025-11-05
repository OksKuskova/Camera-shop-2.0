import { AppRoute } from "../../constants/router";

export const matchPath = (currentPath: string, breadcrumbPath: string) => {
  if (currentPath === AppRoute.Root && breadcrumbPath === AppRoute.Root) {
    return true;
  };

  const currentPathSegments = currentPath.split('/').filter((path) => path);
  const breadcrumbPathSegments = breadcrumbPath.split('/').filter((path) => path);

  if (currentPathSegments.length !== breadcrumbPathSegments.length) {
    return false;
  };

  return breadcrumbPathSegments.every((segment, index) => segment.startsWith(':') || (segment === currentPathSegments[index]));
}
