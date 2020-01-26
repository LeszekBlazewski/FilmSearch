import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MovieSearchFormComponent } from './movie-search/movie-search-form/movie-search-form.component';
import { MovieListComponent } from './movie-search/movie-list/movie-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieListItemComponent } from './movie-search/movie-list-item/movie-list-item.component';
import { MovieTitleComponent } from './movie-details/movie-title/movie-title.component';
import { MovieDirectorComponent } from './movie-details/movie-director/movie-director.component';
import { MovieCastComponent } from './movie-details/movie-cast/movie-cast.component';
import { MovieRatingsComponent } from './movie-details/movie-ratings/movie-ratings.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';


@NgModule({
  declarations: [MovieSearchFormComponent, MovieListComponent, MovieListItemComponent, MovieTitleComponent, MovieDirectorComponent, MovieCastComponent, MovieRatingsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgxUsefulSwiperModule
  ],
  exports: [SharedModule, MovieSearchFormComponent, MovieListComponent, MovieListItemComponent, MovieTitleComponent, MovieDirectorComponent, MovieCastComponent, MovieRatingsComponent]
})
export class ComponentsModule { }
