import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, RouterModule } from '@angular/router'; /*???*/

import { LoginPage } from './login/login.page';
import { StateService } from './state/state.service'; 
import { IngresadoGuard } from './ingresado.guard';

describe('IngresadoGuard', () => {
  let guard: IngresadoGuard;
  let stateService: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[Router, RouterModule],
      providers:[IngresadoGuard, StateService]
    });
    guard = TestBed.inject(IngresadoGuard);
    stateService = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('deberia retornar true si el usuario no esta en blanco', ()=> {
    spyOn(stateService, 'getUsuario').and.returnValue({usuario: 'Miranda'});
    expect(guard.canActivate()).toBeTrue();
  });

  it('deberia retornar false si el usuario esta en blanco', () => {
    spyOn(stateService, 'getUsuario').and.returnValue(null);
    expect(guard.canActivate()).toBeFalse();
  });

});
