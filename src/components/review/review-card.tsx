import { ClassName } from "../../constants/class-name";
import { DateFormat, ReviewCardList } from "./review.const";
import { humanizeDate } from "./review.utils";
import { DateFormatKeys, DateFormatValues, Review, ReviewCardListKeys } from "./review.type";

import Rating from "../rating/rating";
import ReviewCardListItem from "./review-card-list-item";

type ReviewCardProps = Review;

function ReviewCard({ userName, createAt, rating, advantage, disadvantage, review }: ReviewCardProps): JSX.Element {
  const data: Record<ReviewCardListKeys, string> = { advantage, disadvantage, review };

  const { DayMonth, YearMonthDay } = (Object.fromEntries((Object.entries(DateFormat) as [DateFormatKeys, DateFormatValues][]).map(([key, value]) => [key, humanizeDate(createAt, value)]))) as Record<DateFormatKeys, string>;

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime={YearMonthDay}>{DayMonth}</time>
      </div>
      <Rating className={ClassName.Review} rating={rating} />
      <ul className="review-card__list">
        {(Object.keys(ReviewCardList) as ReviewCardListKeys[]).map((key) => <ReviewCardListItem key={key} value={ReviewCardList[key]} data={data[key]} />)}
      </ul>
    </li>
  )
}

export default ReviewCard;
