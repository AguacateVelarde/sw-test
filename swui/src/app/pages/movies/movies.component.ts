import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies : Object 
  constructor(
    private swapi : SwapiService,
    private router : Router 
  ) { }

  async ngOnInit() {
   this.swapi.getAllMovies()
   .subscribe( 
     (data: any) =>{
      this.movies = data 
     }
   )
  }

  detailsForm( movie_id ){
    this.router.navigate([`/movie/${ movie_id }`])
  }

}
