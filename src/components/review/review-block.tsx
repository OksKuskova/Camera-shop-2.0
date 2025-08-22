import { getReviewsById } from "../../mocks/reviews";
import { sortReviewsByDate } from "./review.utils";
import { Review } from "./review.type";

import ReviewCard from "./review-card";
import { VisibleReviews } from "./review.const";
import { useEffect, useMemo, useRef, useState } from "react";

type ReviewBlockProps = Pick<Review, 'cameraId'>

function ReviewBlock({ cameraId }: ReviewBlockProps): JSX.Element {
  const { DEFAULT_COUNT, STEP_COUNT } = VisibleReviews;

  const reviews = getReviewsById(cameraId);
  const sortedReviews = useMemo(() => sortReviewsByDate(reviews), [reviews]);

  const [visibleReviewsCount, setVisibleReviewsCount] = useState<number>(DEFAULT_COUNT);

  console.log('visibleReviewsCount:', visibleReviewsCount);

  const lastReviewRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisibleReviewsCount((prevCounter) => Math.min(prevCounter + STEP_COUNT, sortedReviews.length))
    }, { root: null, rootMargin: '0px', threshold: 1, });
    if (lastReviewRef.current) observer.observe(lastReviewRef.current);

    return () => observer.disconnect();
  }, [lastReviewRef, visibleReviewsCount]);

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">Оставить свой отзыв</button>
        </div>
        <ul className="review-block__list">
          {sortedReviews.slice(0, visibleReviewsCount).map((review, index) => <ReviewCard key={review.id} {...review} elementRef={index === visibleReviewsCount - 1 ? lastReviewRef : undefined} />)}
        </ul>
        {
          visibleReviewsCount < sortedReviews.length && (
            <div className="review-block__buttons">
              <button className="btn btn--purple" type="button" onClick={() => setVisibleReviewsCount((prevCounter) => Math.min(prevCounter + STEP_COUNT, sortedReviews.length))}>Показать больше отзывов</button>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default ReviewBlock;
