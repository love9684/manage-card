import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { IAddCard } from 'src/app/core/models/models';

import { Constants } from './../../app.constants';

import { CommonService } from './../../common.service';
import { ApiService } from './../../core/services/api.service';
import { AlertService } from './../../core/services/alert.service';

@Component({
  selector: 'app-add-edit-card',
  templateUrl: './add-edit-card.component.html',
  styleUrls: ['./add-edit-card.component.scss']
})
export class AddEditCardComponent {

  years: number[] = [];
  cardDetailsForm: FormGroup;

  private cardRules = Constants.cardRules;
  private values = Constants.values;

  cardLength = this.values.defaultCardLength;
  cvvLength = this.values.defaultCvvLength;

  showExpiryMessage = false;

  constructor(
    private api: ApiService,
    public bsModalRef: BsModalRef,
    private form: FormBuilder,
    private cs: CommonService,
    private as: AlertService
  ) {
    this.generateYears();
    this.createForm();
  }

  private generateYears() {
    const TOTAL_NO_OF_YEARS = 10;
    const CURRENT_YEAR = new Date().getFullYear();
    for (let i = 0; i < TOTAL_NO_OF_YEARS; i++) {
      this.years.push(CURRENT_YEAR + i);
    }
  }

  private createForm() {
    this.cardDetailsForm = this.form.group({
      number: [''],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      cvv: [],
      type: ['Debit Card'],
      paymentGateway: ['']
    });

    this.cardDetailsForm.controls.number.valueChanges.subscribe((val: string) => {
      // val = val.replace(/[^0-9.]/g, '');
      let paymentGateway = '';
      this.cardLength = this.values.defaultCardLength;
      this.cvvLength = this.values.defaultCvvLength;
      if (val) {
        if (this.cardRules.amex.initials.some(initial => val.startsWith(initial))) {
          paymentGateway = this.cardRules.amex.name;
          this.cardLength = this.cardRules.amex.card_number_length;
          this.cvvLength = this.cardRules.amex.cvv_length;
        } else if (this.cardRules.visa.initials.some(initial => val.startsWith(initial))) {
          paymentGateway = this.cardRules.visa.name;
          this.cardLength = this.cardRules.visa.card_number_length;
          this.cvvLength = this.cardRules.visa.cvv_length;
        } else if (this.cardRules.master.initials.some(initial => val.startsWith(initial))) {
          paymentGateway = this.cardRules.master.name;
          this.cardLength = this.cardRules.master.card_number_length;
          this.cvvLength = this.cardRules.master.cvv_length;
        }

      }

      this.f.paymentGateway.setValue(paymentGateway);
    });
  }

  get f() {
    return this.cardDetailsForm.controls;
  }

  addCard() {
    const cardDetail: IAddCard = this.cardDetailsForm.value;
    if ((+cardDetail.expiryYear === new Date().getFullYear()) && +cardDetail.expiryMonth <= new Date().getMonth()) {
      this.showExpiryMessage = true;
      return;
    }
    this.api.cardOps.create(cardDetail).subscribe({
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

  onChangeExpiry() {
    this.showExpiryMessage = false;
  }

}
