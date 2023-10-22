import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { StateService } from './state/state.service';


@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {
  constructor(public stateservice: StateService, private router: Router) { }

  canActivate(): boolean {
    
    const nusuario = {
      IngresadoGuard: this.stateservice.getUsuario
    };
    if (!nusuario.IngresadoGuard) {
      this.router.navigate(['login/']);
      return false;
    }

    return true;


  }

}
