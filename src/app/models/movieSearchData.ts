import { MovieSearchParams } from './movieSearchParams';

export interface MovieSearchData extends MovieSearchParams {
    imdbID: string,
    Poster: string;
}
