import { Camera } from '../../types/camera.types';
import { ClassNameValue } from '../../types/class-name.type';
import RatingStar from './rating-star';
import { RATING_LENGTH, StarLink } from './rating.const';

type RatingProps = Pick<Camera, 'rating'> & Partial<Pick<Camera, 'reviewCount'>> & {
  className: ClassNameValue;
}

function Rating({ className, rating, reviewCount }: RatingProps): JSX.Element {
  return (
    <div className={`rate ${className}__rate`}>
      {Array.from({ length: RATING_LENGTH }, (_, i) => <RatingStar key={i} starLink={i < rating ? StarLink.Full : StarLink.Empty} />)}
      <p className="visually-hidden">{`Рейтинг: ${rating}`}</p>
      {reviewCount !== undefined && (
        <p className="rate__count">
          <span className="visually-hidden">Всего оценок:</span>{reviewCount}
        </p>
      )}
    </div>
  );
}

export default Rating;
