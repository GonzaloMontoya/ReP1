import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  nusuario:BehaviorSubject<string> = new BehaviorSubject('');

  get getUsuario(){
    return this.nusuario.asObservable();
  }

  set setUsuario(usuario:string){
      this.nusuario.next(usuario);
  }


  constructor() { 
  }
}
