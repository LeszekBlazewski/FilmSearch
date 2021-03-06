import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchPageComponent } from './pages/movie-search-page/movie-search-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';


const routes: Routes = [
  {
    path: '',
    component: MovieSearchPageComponent,
    data: { reuseRoute: true }
  },
  {
    path: 'movie/:id',
    component: MovieDetailPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
