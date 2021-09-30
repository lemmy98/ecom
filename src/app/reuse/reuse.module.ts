import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReuseComponent } from './reuse/reuse.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ReuseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReuseModule { }
