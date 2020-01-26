import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-director',
  templateUrl: './movie-director.component.html',
  styleUrls: ['./movie-director.component.scss']
})
export class MovieDirectorComponent implements OnInit {


  @Input() director: string;

  constructor() { }

  ngOnInit() {
  }

}
