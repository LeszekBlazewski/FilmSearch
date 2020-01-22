import { MovieSearchData } from './movieSearchData';

export interface MovieSearchResponse {
    Search: MovieSearchData[];
    totalResults: number;
    Response: string;
    Error: string;
}
