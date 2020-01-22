import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieSearchParams } from '../models/movieSearchParams';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MovieSearchResponse } from '../models/movieSearchResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  private movieSearchParams$: BehaviorSubject<MovieSearchParams> = new BehaviorSubject(undefined);

  constructor(private http: HttpClient) { }


  getMovies(pageNumber: number = 1): Observable<MovieSearchResponse> {
    const params = this.constructHttpParams(pageNumber);
    return this.http.get<MovieSearchResponse>(environment.omdApiUrl, { params });
  }

  private constructHttpParams(pageNumber: number): HttpParams {

    const movieSearchParams = this.movieSearchParams$.value;

    let params = new HttpParams()
      .set('s', movieSearchParams.Title)     // title is necessary
      .set('page', pageNumber.toString())    // page number is default to 1 in API so we can set it every time
      .set('apikey', environment.apiKey);    // api key is always required


    if (movieSearchParams.Type)
      params = params.set('type', movieSearchParams.Type);

    if (movieSearchParams.Year)
      params = params.set('y', movieSearchParams.Year);

    return params;
  }


  emitNextSearchParam(nextParams: MovieSearchParams) {
    this.movieSearchParams$.next(nextParams);
  }

  getLatestSearchParams(): Observable<MovieSearchParams> {
    return this.movieSearchParams$.asObservable();
  }

}
