import { MovieTypeEnum } from './enums/movieTypeEnum';

export interface MovieSearchParams {
    Title: string,
    Year: string
    Type: MovieTypeEnum,
    Plot: string,
}