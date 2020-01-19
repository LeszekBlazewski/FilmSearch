import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss']
})
export class MovieDetailPageComponent implements OnInit {

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
