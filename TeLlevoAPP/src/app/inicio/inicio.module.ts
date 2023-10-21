import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InicioPage } from './inicio.page';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [InicioPage],
  providers: [ApiService]
})
export class InicioPageModule {}
