import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class DummyService {

  private dummys:BehaviorSubject<any>= new BehaviorSubject(null);
  private dummy:BehaviorSubject<any>= new BehaviorSubject(null);


  setDummys(datosDummys:any){
    this.dummys.next(datosDummys);
  };

  getDummys(){
    return this.dummys.asObservable();
  }

  setDummy(datosDummy:any){
    this.dummy.next(datosDummy);
  };

  getDummy(){
    return this.dummy.asObservable()
  }


  constructor() {}

}
