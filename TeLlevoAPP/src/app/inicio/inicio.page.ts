import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
    
  usuarios: Usuarios[] = [
      {
        nusuario:" ",
        password:" "
      }
    ]
  
  
  
  ngOnInit() {
  }


  
}
