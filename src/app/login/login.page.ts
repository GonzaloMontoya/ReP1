import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ingersoUsuariofrm: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, private stateService: StateService) {

    this.ingersoUsuariofrm = this.fb.group({
      nusuario: [""],
      password: [""]

    })
  }

  ngOnInit() {
  }
  IngresarUsuario() {
    console.log("Prueba")
    const usuario = {
      nusuario: this.ingersoUsuariofrm.get("nusuario")?.value,
      password: this.ingersoUsuariofrm.get("password")?.value,

    }

    if (usuario.nusuario == "" || usuario.password == "") {
      alert("Ingrese Los Datos")
      return;
    }
    else {
      this.stateService.setUsuario = usuario.nusuario;
      this.router.navigate(['/inicio']);
      console.log(usuario)
      return
    }

  }


}


