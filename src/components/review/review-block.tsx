import { getReviewsById } from "../../mocks/reviews";
import { sortReviewsByDate } from "./review.utils";
import { Review } from "./review.type";

import ReviewCard from "./review-card";

type ReviewBlockProps = Pick<Review, 'cameraId'>

function ReviewBlock({ cameraId }: ReviewBlockProps): JSX.Element {
  const reviews = getReviewsById(cameraId);

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">Оставить свой отзыв</button>
        </div>
        <ul className="review-block__list">
          {sortReviewsByDate(reviews).map((review) => <ReviewCard key={review.id} {...review} />)}
        </ul>
        <div className="review-block__buttons">
          <button className="btn btn--purple" type="button">Показать больше отзывов
          </button>
        </div>
      </div>
    </section>
  )
}

export default ReviewBlock;
