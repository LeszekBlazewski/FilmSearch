import { Rating } from './rating';
import { MovieTypeEnum } from './enums/movieTypeEnum';

export interface MovieDetails {
    Title: string;
    Year: Date;
    Rated: string;
    Released: Date;
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: Rating[],
    Metascore: number,
    imdbRating: number,
    imdbVotes: string,
    imdbID: string,
    Type: MovieTypeEnum,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string
}
