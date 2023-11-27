import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DummyService } from './dummy.service';

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

  
});
