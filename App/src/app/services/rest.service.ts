import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { SaftFile } from "../Models/SaftFile";
import { Observable } from 'rxjs';

const endpoint = "http://localhost:5000/api/v1";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { };

  private extraData(res: Response) {
    let body = res;
    return body || {};
  };

  getSaftFile(): Observable<SaftFile> {
    return this.http.get<SaftFile>(`${endpoint}/saftFiles/5f0dbbe7c932230c3cb52399`);
  };
}
