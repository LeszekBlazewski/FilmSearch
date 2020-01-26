import { Component, OnInit, Input } from '@angular/core';
import { MovieSearchData } from 'src/app/models/movieSearchData';
import { MovieDetails } from 'src/app/models/movieDetails';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { MovieSearchService } from 'src/app/services/movie-search.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {

  @Input() movieData: MovieSearchData;

  movieDetails$: Observable<MovieDetails>;

  constructor(private movieService: MovieService,
    private router: Router,
    private movieSearchService: MovieSearchService) { }

  ngOnInit() {
    this.movieSearchService.getLatestSearchParams().pipe(
      take(1)
    ).subscribe(params =>
      this.movieDetails$ = this.movieService.getMovieDetailsFromApi(this.movieData.imdbID, params.Plot)
    );
  }

  openMovieDetails(details: MovieDetails) {
    this.movieService.emitNextMovieDetails(details);
    this.router.navigate([`movie/${details.imdbID}`]);

  }

}
