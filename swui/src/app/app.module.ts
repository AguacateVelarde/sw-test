import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { StarshipDetailComponent } from './pages/starship-detail/starship-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    StarshipsComponent,
    StarshipDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
