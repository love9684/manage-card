import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { CommonService } from './../../common.service';
import { ApiService } from './../../core/services/api.service';
import { AlertService } from './../../core/services/alert.service';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.scss']
})

export class DeleteCardComponent {

  id: number;

  constructor(
    private api: ApiService,
    public bsModalRef: BsModalRef,
    private cs: CommonService,
    private as: AlertService
    ) { }

  removeCard() {
    this.api.cardOps.delete(this.id).subscribe({
      next: (res) => {
        if (res.resultCode === 'R00') {
          this.cs.updateCardListSubject.next();
          this.bsModalRef.hide();
          this.as.showError({
            msg: res.resultMessage
          });
        }
      }
    });
  }

}
