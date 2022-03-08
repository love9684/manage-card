import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { AddEditCardComponent } from './cards/add-edit-card/add-edit-card.component';
import { DeleteCardComponent } from './cards/delete-card/delete-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardListComponent,
    AddEditCardComponent,
    DeleteCardComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
