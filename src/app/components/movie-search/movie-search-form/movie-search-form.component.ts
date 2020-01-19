import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieType } from 'src/app/models/enums/movieTypeEnum';
import { MovieSearchParams } from 'src/app/models/movieSearchParams';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-search-form',
  templateUrl: './movie-search-form.component.html',
  styleUrls: ['./movie-search-form.component.scss']
})
export class MovieSearchFormComponent implements OnInit {

  searchForm: FormGroup;

  movieTypes = Object.values(MovieType);

  constructor(private formBuilder: FormBuilder,
    private movieService: MovieService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Type: [''],
      Year: ['', Validators.pattern(/^(19|20)\d{2}$/)]
    });
  }

  submitForm() {

    if (this.searchForm.invalid)
      return;

    const searchParams: MovieSearchParams = this.searchForm.value;

    this.movieService.emitNextSearchParam(searchParams);
  }
}
