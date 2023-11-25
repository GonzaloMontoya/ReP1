import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { StateService } from './state/state.service';


@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {
  constructor(public stateservice: StateService, private router: Router) { }

  canActivate(): boolean {
    let isLogged = false;
    this.stateservice.getUsuario.subscribe((usuario) => {
      if (usuario != '') {
        isLogged = true;
      }else{
        this.router.navigate(['/login']);
      }
    })
    return isLogged;
  }

}