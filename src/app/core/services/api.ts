import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export class Api<REQ, RES> {

    constructor(protected http: HttpClient, protected actionUrl: string) {}

    getAll(): Observable<RES> {
        return this.http.get<any>(this.actionUrl);
    }

    get(id: number): Observable<RES> {
        return this.http.get<any>(`${this.actionUrl}/${id}`);
    }

    delete(id: number): Observable<RES> {
        return this.http.delete<any>(`${this.actionUrl}/${id}`);
    }

    create(payload: REQ): Observable<RES> {
        return this.http.post<any>(this.actionUrl, payload);
    }
}
