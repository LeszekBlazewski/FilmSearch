import { Component, OnInit, Input } from '@angular/core';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'app-movie-ratings',
  templateUrl: './movie-ratings.component.html',
  styleUrls: ['./movie-ratings.component.scss']
})
export class MovieRatingsComponent implements OnInit {

  @Input() ratings: Rating[];

  constructor() { }

  ngOnInit() {
    if (this.ratings.length > 0) {

      if (this.ratings[0])
        this.ratings[0].NumericValue = Number(this.ratings[0].Value.replace(/[^0-9\.]+/g, "")) / 2;

      if (this.ratings[1])
        this.ratings[1].NumericValue = Number(this.ratings[1].Value.match(/[^%]*/)[0]);

      if (this.ratings[2])
        this.ratings[2].NumericValue = Number(this.ratings[2].Value.match(/[^/]*/)[0]);

    }
  }
}