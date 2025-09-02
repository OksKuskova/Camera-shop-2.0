import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getReviewsById } from "../../mocks/reviews";
import { sortReviewsByDate } from "./review.utils";
import { Review } from "./review.type";
import { VisibleReviews } from "./review.const";

import ReviewCard from "./review-card";

type ReviewBlockProps = Pick<Review, 'cameraId'>

function ReviewBlock({ cameraId }: ReviewBlockProps): JSX.Element {
  const { DEFAULT_COUNT, STEP_COUNT } = VisibleReviews;

  const reviews = getReviewsById(cameraId);

  const sortedReviews = useMemo(() => sortReviewsByDate(reviews), [reviews]);

  const [visibleReviewsCount, setVisibleReviewsCount] = useState<number>(DEFAULT_COUNT);
  const [autoLoadEnabled, setAutoLoadEnabled] = useState<boolean>(false);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastReviewRef = useRef<HTMLLIElement | null>(null);

  const showMoreReviews = useCallback(() => {
    setVisibleReviewsCount((prevCounter) => Math.min(prevCounter + STEP_COUNT, sortedReviews.length));

  }, [sortedReviews.length]);


  useEffect(() => {
    if (!autoLoadEnabled) {
      return;
    }

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          showMoreReviews();
        }
      },
        { root: null, rootMargin: '0px', threshold: 1 });
    }

    const currentObserver = observerRef.current;
    const currentLastReview = lastReviewRef.current;

    if (currentLastReview) {
      currentObserver.observe(currentLastReview)
    }

    return () => {
      if (currentLastReview) {
        currentObserver.unobserve(currentLastReview);
      }
    }
  }, [visibleReviewsCount]);

  const handleShowMoreRevewClick = () => {
    showMoreReviews();
    setAutoLoadEnabled(true);
  }

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">Оставить свой отзыв</button>
        </div>
        <ul className="review-block__list">
          {sortedReviews.slice(0, visibleReviewsCount).map((review, index) => <ReviewCard key={review.id} {...review} ref={autoLoadEnabled && index === visibleReviewsCount - 1 ? lastReviewRef : null} />)}
        </ul>
        {
          !autoLoadEnabled && visibleReviewsCount < sortedReviews.length && (
            <div className="review-block__buttons">
              <button className="btn btn--purple" type="button" onClick={handleShowMoreRevewClick}>Показать больше отзывов</button>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default ReviewBlock;
