import { Component } from '@angular/core';

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

/* SERVICES */
import { CommonService } from './../../common.service';
import { ApiService } from './../../core/services/api.service';

/* CONSTNATS */
import { Constants } from './../../app.constants';

/* MODALS */
import { ICard } from './../../core/models/models';

/* COMPONENTS */
import { DeleteCardComponent } from './../delete-card/delete-card.component';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  modalRef?: BsModalRef;

  svgURL = Constants.urls.svgURL;

  cards: ICard[] = [];

  constructor(
    private api: ApiService,
    private modalService: BsModalService,
    private cs: CommonService
    ) {
    this.getCards();
    this.subscribeCardUpdate();
  }

  private subscribeCardUpdate() {
    this.cs.updateCardListSubject.subscribe(() => {
      this.getCards();
    });
  }

  private getCards(): void {
    this.api.getAllCardOps.getAll().subscribe({
      next: (res) => {
        if (res.resultCode === 'R00') {
          this.cards = res.data;
        }
      }
    });
  }

  openConfirmationModal(id: number) {
    const initialState: ModalOptions = {
      initialState: {
        id
      }
    };
    this.modalRef = this.modalService.show(DeleteCardComponent, initialState);
  }

}
