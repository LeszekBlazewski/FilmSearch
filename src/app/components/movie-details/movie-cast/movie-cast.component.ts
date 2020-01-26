import { Component, OnInit, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss']
})
export class MovieCastComponent implements OnInit {

  actors: string[] = [];

  @Input() movieCast: string;

  constructor() { }

  ngOnInit() {
    this.actors = this.movieCast.split(',').map(actor => actor.trim());
  }

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    allowTouchMove: false,
  };

}
