import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Router, ActivatedRoute } from '@angular/router';
enum PageType {
  MOVIE, 
  NORMAL,
  UNKNOW,
  NOT_FOUND
}
@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  id : number = 0
  data : any = null
  starships : Array<any> = []
  type: PageType = PageType.UNKNOW
   constructor(
    private route : ActivatedRoute,
    private router : Router,
    private swapi : SwapiService    
  ) { }

  async ngOnInit() {
    this.route.params.subscribe( async (params: Object ) => {
     if( params.hasOwnProperty('id') ){
      this.type = PageType.MOVIE
      
      this.id = +params['id'];
      if( [1, 2, 3, 4, 5, 6, 7 ].includes( this.id )  ){
        this.data = await this.swapi.getAllStarshipsByEpisode( this.id )
        let promisesStarships = this.data.starships.map(item=>fetch(item))
  
        Promise.all( promisesStarships ).then(responses =>
          Promise.all(responses.map((res:any) => res.json()))
        ).then( starshipResponse => {        
          this.starships = starshipResponse 
        })
      }else{
        this.type = PageType.NOT_FOUND
      }            
     }else{
       this.type = PageType.NORMAL
     }
   });
  }
  openForm( starship_url ){
    let id_starship = starship_url.split( '/' )[5]
    console.log( id_starship )
    this.router.navigate(['/starship', id_starship ])
  }

}
