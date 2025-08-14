import { StarLinkValue } from './rating.type';

type RatingStarProps = {
  starLink: StarLinkValue;
}

function RatingStar({ starLink }: RatingStarProps): JSX.Element {
  return (
    <svg width="17" height="16" aria-hidden="true">
      <use xlinkHref={starLink}></use>
    </svg>
  );
}

export default RatingStar;
