import { AppRoute } from '../../constants/router'

export const getRoute = (id: number): string => {
  return AppRoute.Product.replace(':id', id.toString())
}
