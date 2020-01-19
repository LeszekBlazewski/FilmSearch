import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-search-page',
  templateUrl: './movie-search-page.component.html',
  styleUrls: ['./movie-search-page.component.scss']
})
export class MovieSearchPageComponent implements OnInit {

  //movie$: Movie;

  constructor() { }

  ngOnInit() {
    /* this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMovieDetails(params.get('id')))
    )
    */
  }

}
