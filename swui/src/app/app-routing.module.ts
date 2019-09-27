import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { StarshipDetailComponent } from './pages/starship-detail/starship-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path : '', component : MoviesComponent },
  { path : 'movie/:id', component : StarshipsComponent },
  { path : 'movie', component : StarshipsComponent },
  { path : 'starship/:id', component : StarshipDetailComponent },
  { path : '**', component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
