import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap/alert';

import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [HeaderComponent, AlertComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  exports: [HeaderComponent, AlertComponent, AlertModule]
})
export class CoreModule { }
