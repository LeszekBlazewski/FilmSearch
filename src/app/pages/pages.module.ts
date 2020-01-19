import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { MovieSearchPageComponent } from './movie-search-page/movie-search-page.component';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [MovieSearchPageComponent, MovieDetailPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FlexLayoutModule
  ],
  exports: [ComponentsModule, MovieSearchPageComponent]
})
export class PagesModule { }
