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



@NgModule({
  declarations: [MovieSearchFormComponent, MovieListComponent, MovieListItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
  ],
  exports: [SharedModule, MovieSearchFormComponent, MovieListComponent, MovieListItemComponent]
})
export class ComponentsModule { }
