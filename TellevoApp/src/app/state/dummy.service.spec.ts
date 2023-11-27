import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DummyService } from './dummy.service';
// import { Intdummys } from '../interfaces/Intdummy.interface';
// import { ApiService } from '../services/api.service';

describe('DummyService', () => {
  let service: DummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });

    service = TestBed.inject(DummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should return Morty when calling obtenerUnPersonaje(2)',
  // (done:DoneFn)/*Esto es para que termine de cargar la consulta*/ =>{ 
  //   const name= "Terry";
  //   service.getDummy(name).subscribe((dummy)=>{
  //     console.log(dummy); 
  //     expect(dummy.name).toBe('Terry');
  //     done();
  //   })
  // });

});
