import { RatingSourceEnum } from './enums/ratingSourceEnum';

export interface Rating {
    Source: RatingSourceEnum,
    Value: string
}