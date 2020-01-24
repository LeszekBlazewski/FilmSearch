import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { MovieSearchResponse } from 'src/app/models/movieSearchResponse';
import { MovieSearchService } from 'src/app/services/movie-search.service';
import { MovieSearchData } from 'src/app/models/movieSearchData';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  private componentSubscriptions$: Subscription = new Subscription();

  movies$: BehaviorSubject<MovieSearchData[]>;

  moviesData$: Observable<MovieSearchResponse>;

  shouldDisplayList: boolean = false;

  allMoviesFetched: boolean = false;  // set to true when all movies for search are fetched

  private currentPageNumber: number = 1;

  totalMoviesFound: number;

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit() {

    const sub = this.movieSearchService.getLatestSearchParams().subscribe(searchParams => {
      if (searchParams) {
        this.shouldDisplayList = true;
        this.moviesData$ = this.movieSearchService.getMovies()
          .pipe(
            tap(resp => {
              this.movies$ = new BehaviorSubject<MovieSearchData[]>(resp.Search);
              this.totalMoviesFound = resp.totalResults;
            }))
      }
    });

    this.componentSubscriptions$.add(sub);
  }

  ngOnDestroy(): void {
    this.componentSubscriptions$.unsubscribe();
  }

  onDownScroll() {

    this.currentPageNumber++;

    let shouldFetchNextPage = false;

    if (this.totalMoviesFound < 10 || this.totalMoviesFound % 10 == 0)  // for cases when all search results are less than 10 or divisible by 10 exp. 2,10,100
      shouldFetchNextPage = this.currentPageNumber <= this.totalMoviesFound / 10 ? true : false;
    else
      shouldFetchNextPage = this.currentPageNumber <= this.totalMoviesFound / 10 + 1 ? true : false;  // for all other cases like 65, 72 etc.

    if (shouldFetchNextPage)
      this.movieSearchService
        .getMovies(this.currentPageNumber)
        .pipe(
          tap(response => {

            const currentDisplayedMovies = this.movies$.value;

            this.movies$.next(currentDisplayedMovies.concat(response.Search));

          }),
          take(1))
        .subscribe();
    else
      this.allMoviesFetched = true;
  }

}
