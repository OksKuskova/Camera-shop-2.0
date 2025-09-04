import { Value } from './utils';
import { ClassName } from '../constants/class-name';

export type ClassNameValue = Value<typeof ClassName>;

export type ClassNameWithImageSize = Exclude<ClassNameValue, 'review-card'>;
