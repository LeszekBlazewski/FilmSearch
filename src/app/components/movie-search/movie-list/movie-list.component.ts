import { Component, OnInit, OnDestroy, } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Observable, Subscription } from 'rxjs';
import { MovieSearchResponse } from 'src/app/models/movieSearchResponse';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  private componentSubscriptions$: Subscription = new Subscription();

  moviesData$: Observable<MovieSearchResponse>;

  shouldDisplayList: boolean = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    const sub = this.movieService.getLatestSearchParams().subscribe(searchParams => {
      if (searchParams) {
        this.shouldDisplayList = true;
        this.moviesData$ = this.movieService.getMovies();
      }
    });

    this.componentSubscriptions$.add(sub);
  }

  ngOnDestroy(): void {
    this.componentSubscriptions$.unsubscribe();
  }

}
