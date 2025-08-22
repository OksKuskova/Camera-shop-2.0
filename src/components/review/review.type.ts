import { DateFormat, ReviewCardList } from "./review.const";

export type Review = {
	id: string;
	createAt: string;
	cameraId: number;
	userName: string;
	advantage: string;
	disadvantage: string;
	review: string;
	rating: number;
}

export type ReviewCardListKeys = keyof typeof ReviewCardList;
export type ReviewCardListValue = typeof ReviewCardList[ReviewCardListKeys];

export type DateFormatKeys = keyof typeof DateFormat;
export type DateFormatValues = typeof DateFormat[DateFormatKeys];
