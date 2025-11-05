import { matchPath } from "../components/breadcrumbs/breadcrumbs.utils";
import { BREADCRUMB_DEFAULT, breadcrumbsConfig, MULTIPLE_SLASHES_REGEX } from "../components/breadcrumbs/breadcrumbs.const";
import { Breadcrumb } from "../components/breadcrumbs/breadcrumbs.type";

export function useBreadcrumbs(pathParts: string[], productName?: string) {
  const breadcrumbs: Breadcrumb[] = [BREADCRUMB_DEFAULT];
  let currentPath = '';

  pathParts.forEach((pathPart) => {
    currentPath = `${currentPath}/${pathPart}`.replace(MULTIPLE_SLASHES_REGEX, '/');
    const matchedRoute = breadcrumbsConfig.find((route) => matchPath(currentPath, route.path));

    if (matchedRoute) {
      const { breadcrumb } = matchedRoute
      const name = typeof breadcrumb === 'function' ? breadcrumb(productName) : breadcrumb;

      breadcrumbs.push({ route: currentPath, name });
    }
  })

  return breadcrumbs;
}
