import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../interfaces/usuario.interface';
import { Observable } from 'rxjs';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombreUsuario$!: Observable<String>;  

  constructor(
    private stateService: StateService
) {
  this.nombreUsuario$=this.stateService.getUsuario;
}


ngOnInit() {
}


  
}
