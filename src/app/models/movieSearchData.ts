import { MovieSearchParams } from './movieSearchParams';

export interface MovieSearchData extends MovieSearchParams {
    imdbId: string,
    Poster: string;
}
