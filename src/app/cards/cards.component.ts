import { Component } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AddEditCardComponent } from './add-edit-card/add-edit-card.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  addCard() {
    this.modalRef = this.modalService.show(AddEditCardComponent, {keyboard: false, ignoreBackdropClick: true});
  }

}
