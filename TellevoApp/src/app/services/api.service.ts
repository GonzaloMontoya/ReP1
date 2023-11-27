import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Intdummys } from '../interfaces/Intdummy.interface';
// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ApiService {
  private url:string="https://dummyjson.com/users";
  constructor(private http: HttpClient) { }

  obtenerDummys(){
   return this.http.get('https://dummyjson.com/users');
  }
  // obtenerDummys(name:string):Observable<Intdummys>{
  //   return this.http.get<Intdummys>(`${this.url}/users/${name}`);
  //   }
}

