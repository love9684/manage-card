import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

import { Api } from './api';
import { IAddCard, ICardAPIResponse, IGetAllCardAPIResponse } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  cardOps = new Api<IAddCard, ICardAPIResponse>(this.http, `${environment.baseURL}cards`);
  getAllCardOps = new Api<null, IGetAllCardAPIResponse>(this.http, `${environment.baseURL}cards`);
}
