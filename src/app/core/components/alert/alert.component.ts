import { Component, OnInit } from '@angular/core';

import { IAlertConfig } from '../../models/models';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  showAlert = false;

  private initialConfig: IAlertConfig = {
    type: 'success',
    msg: '',
    dismissible: true,
    timeout: 2000
  };

  config: IAlertConfig = {
    msg: ''
  };

  constructor(private as: AlertService) {
    this.as.getShowAlertSubject().subscribe(data => {
      this.showAlert = true;
      this.config = Object.assign({}, this.initialConfig, data);
    });

    this.as.getHideAlertSubject().subscribe(() => {
      this.showAlert = false;
    });
  }

  ngOnInit(): void {
  }

}
