import { MovieType } from './enums/movieTypeEnum';

export interface MovieSearchParams {
    Title: string,
    Year: string
    Type: MovieType,
    page?: number,
}