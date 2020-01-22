import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MovieSearchResponse } from 'src/app/models/movieSearchResponse';
import { MovieSearchService } from 'src/app/services/movie-search.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  private componentSubscriptions$: Subscription = new Subscription();

  moviesData$: Observable<MovieSearchResponse>;

  shouldDisplayList: boolean = false;

  allMoviesFetched = false;  // set to true when all movies for search are fetched

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit() {

    const sub = this.movieSearchService.getLatestSearchParams().subscribe(searchParams => {
      if (searchParams) {
        this.shouldDisplayList = true;
        this.moviesData$ = this.movieSearchService.getMovies();
      }
    });

    this.componentSubscriptions$.add(sub);
  }

  ngOnDestroy(): void {
    this.componentSubscriptions$.unsubscribe();
  }

  onDownScroll() {
    console.log('scrooled!');
  }

}
