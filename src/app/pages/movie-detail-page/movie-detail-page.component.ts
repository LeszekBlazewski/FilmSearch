import { Component, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/models/movieDetails';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss']
})
export class MovieDetailPageComponent implements OnInit {

  movie$: Observable<MovieDetails>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movie$ = this.movieService.getMovieDetails();
  }

}
