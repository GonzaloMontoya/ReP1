import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }

  obtenerDummys(){
    return this.http.get('https://dummyjson.com/users');
  }
  
}

