import { Component, OnInit } from '@angular/core';
import { DummyService } from '../state/dummy.service'; 

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  public detalles: any

  constructor(
    private dummyService:DummyService
  ) { }

  ngOnInit() {

    this.dummyService.getDummy().subscribe((dummy)=>{
      this.detalles=dummy
    });
  }

}
