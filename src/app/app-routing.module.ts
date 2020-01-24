import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchPageComponent } from './pages/movie-search-page/movie-search-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';


const routes: Routes = [
  {
    path: '',
    component: MovieSearchPageComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailPageComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
