import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  config: Object = { headers: new HttpHeaders().set('Content-Type', 'application/json') }
  constructor(
    private http: HttpClient
  ) { }

  insertForm({
    name, manufacturer, passengers
  }){
    const url = `${ environment.apiURL }/form`    
    return this.http.post( url, {
      name, manufacturer, passengers
    }, this.config )
  }
}
