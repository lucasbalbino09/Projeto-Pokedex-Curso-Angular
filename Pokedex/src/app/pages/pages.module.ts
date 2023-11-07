import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modules
import { PagesRoutingModule } from './routing.module';
//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
