import './review.style.css'

function ReviewCardListEmpty(): JSX.Element {
  return (
    <div className="review-block__empty">
      <p className="title title--h4">Пока отзывов нет. Станьте первым, кто поделится своим мнением!</p>
    </div>
  )
}

export default ReviewCardListEmpty;
