import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  config: Object = { headers: new HttpHeaders().set('Content-Type', 'application/json') }

  constructor(
    private http: HttpClient
  ) { }

  getAllMovies(){
    const url = `${ environment.swAPI }/films`    
    return this.http.get( url, this.config )
  }

  async getAllStarshipsByEpisode( episode_id ){
    const url = `${ environment.swAPI }/films`    
    let movies :any  = await this.http.get( url, this.config ).toPromise()
    let [movie] = movies.results
      .filter( movie => movie.episode_id === episode_id )
      .map( movie =>  {
        return {
          starships : movie.starships,
          episode_id : movie.episode_id,
          opening_crawl: movie.opening_crawl,
          release_date : movie.release_date,
          title: movie.title
        }
      })
      return movie;
  }

  getStarshipById( id ){
    const url = `${ environment.swAPI }/starships/${ id }`  
    return this.http.get( url, this.config )  
  }


}
