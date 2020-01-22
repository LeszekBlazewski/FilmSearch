import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MovieDetails } from '../models/movieDetails';
import { MovieSearchService } from './movie-search.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieDetails$: BehaviorSubject<MovieDetails> = new BehaviorSubject(undefined);

  constructor(private http: HttpClient,
    private movieSearchService: MovieSearchService) {
  }

  getMovieDetailsFromApi(imdbId: string): Observable<MovieDetails> {

    let params = new HttpParams()
      .set('apikey', environment.apiKey)    // api key is always required
      .set('i', imdbId)

    // TODO implement this
    // this.movieSearchService.getLatestSearchParams().pipe(
    //   take(1)
    // ).subscribe(searchParams => params = params.set('plot', searchParams.Plot))

    return this.http.get<MovieDetails>(environment.omdApiUrl, { params });
  }

  emitNextMovieDetails(movieDetails: MovieDetails) {
    this.movieDetails$.next(movieDetails);
  }

  getMovieDetails(): Observable<MovieDetails> {
    return this.movieDetails$.asObservable();
  }
}
