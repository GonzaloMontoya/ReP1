import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Intdummys } from '../interfaces/Intdummy.interface';
import { ApiService } from '../services/api.service';


@Injectable({
  providedIn: 'root'
})


export class DummyService {

  private dummys:BehaviorSubject<any>= new BehaviorSubject(null);
  private dummy:BehaviorSubject<any>= new BehaviorSubject(null);


  setDummys(datosDummys:Intdummys){
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
