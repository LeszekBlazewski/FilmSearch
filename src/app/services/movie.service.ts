import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MovieSearchParams } from '../models/movieSearchParams';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieSearchResponse } from '../models/movieSearchResponse';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieSearchParams$: BehaviorSubject<MovieSearchParams> = new BehaviorSubject(undefined);

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<MovieSearchResponse> {
    const params = this.constructHttpParams();
    return this.http.get<MovieSearchResponse>(environment.omdApiUrl, { params });
  }


  private constructHttpParams(): HttpParams {

    const movieSearchParams = this.movieSearchParams$.value;

    let params = new HttpParams()
      .set('s', movieSearchParams.Title)     // title is necessary
      .set('apikey', environment.apiKey);    // api key is always required

    if (movieSearchParams.Type)
      params = params.set('type', movieSearchParams.Type);

    if (movieSearchParams.Year)
      params = params.set('y', movieSearchParams.Year);

    if (movieSearchParams.page)
      params = params.set('page', movieSearchParams.page.toString());

    return params;
  }

  emitNextSearchParam(nextParams: MovieSearchParams) {
    this.movieSearchParams$.next(nextParams);
  }

  getLatestSearchParams(): Observable<MovieSearchParams> {
    return this.movieSearchParams$.asObservable();
  }
}
