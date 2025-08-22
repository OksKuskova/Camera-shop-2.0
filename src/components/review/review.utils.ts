import { DateFormatValues, Review } from "./review.type";
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

export const humanizeDate = (date: string, format: DateFormatValues): string => dayjs(date).format(format);

export const sortReviewsByDate = (reviews: Review[]): Review[] => reviews.sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
