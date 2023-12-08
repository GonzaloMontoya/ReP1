import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitarPage } from './solicitar.page';

describe('SolicitarPage', () => {
  let component: SolicitarPage;
  let fixture: ComponentFixture<SolicitarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolicitarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
