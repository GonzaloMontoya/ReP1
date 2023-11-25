
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { DummyService } from '../state/dummy.service';
import { StateService } from '../state/state.service';
import { Router } from '@angular/router';
// import { Usuarios } from '../interfaces/usuario.interface';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})


export class InicioPage implements OnInit {
  nombreUsuario$!: Observable<String>; 
  public dummys: any

  constructor(
    private ApiService: ApiService,
    private DummyService: DummyService,
    private stateService: StateService,
    private router: Router
) {
  this.nombreUsuario$=this.stateService.getUsuario;
}


ngOnInit() {
  this.ApiService.obtenerDummys().subscribe((datos)=>{
    this.dummys = datos;
    console.log(datos);
  });
};


IrADetalles(dummy:any){
  debugger;
  this.DummyService.setDummy(dummy);
  this.router.navigateByUrl("/detalles")
}

  
}
