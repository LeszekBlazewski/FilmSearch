import { Component, OnInit, Input } from '@angular/core';
import { MovieDetails } from 'src/app/models/movieDetails';

@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.scss']
})
export class MovieTitleComponent implements OnInit {

  @Input() details: MovieDetails;

  constructor() { }

  ngOnInit() {
  }

}
