import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDetails } from '../models/movieDetails';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieDetails$: BehaviorSubject<MovieDetails> = new BehaviorSubject(undefined);

  constructor(private http: HttpClient) {
  }

  getMovieDetailsFromApi(imdbId: string, plotLength: string): Observable<MovieDetails> {

    let params = new HttpParams()
      .set('apikey', environment.apiKey)    // api key is always required
      .set('i', imdbId)
      .set('plot', plotLength);

    return this.http.get<MovieDetails>(environment.omdApiUrl, { params });
  }

  emitNextMovieDetails(movieDetails: MovieDetails) {
    this.movieDetails$.next(movieDetails);
  }

  getMovieDetails(): Observable<MovieDetails> {
    return this.movieDetails$.asObservable();
  }
}
