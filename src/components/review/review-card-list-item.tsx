import { ReviewCardListValue } from "./review.type"

type ReviewCardListItemProps = {
  value: ReviewCardListValue;
  data: string;
}
function ReviewCardListItem({ value, data }: ReviewCardListItemProps): JSX.Element {
  return (
    <li className="item-list"><span className="item-list__title">{value}:</span>
      <p className="item-list__text">{data}</p>
    </li>
  )
}

export default ReviewCardListItem;
