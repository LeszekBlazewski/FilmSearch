import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MovieSearchFormComponent } from './movie-search/movie-search-form/movie-search-form.component';
import { MovieListComponent } from './movie-search/movie-list/movie-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MovieSearchFormComponent, MovieListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [SharedModule, MovieSearchFormComponent, MovieListComponent]
})
export class ComponentsModule { }
