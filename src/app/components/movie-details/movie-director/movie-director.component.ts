import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-director',
  templateUrl: './movie-director.component.html',
  styleUrls: ['./movie-director.component.scss']
})
export class MovieDirectorComponent implements OnInit {

  directors: string[];

  @Input() director: string;

  constructor() { }

  ngOnInit() {
    this.directors = this.director.split(',').map(d => d.trim());
  }

}
