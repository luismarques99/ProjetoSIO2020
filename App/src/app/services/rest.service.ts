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

  getCurrentYearSaftFile(): Observable<SaftFile> {
    return this.http.get<SaftFile>(`${endpoint}/saftFiles/5f0dbbe7c932230c3cb52399`);
  };

  getOneYearBeforeSaftFile(): Observable<SaftFile> {
    return this.http.get<SaftFile>(`${endpoint}/saftFiles/5f105af72f0c260ab0a003a4`);
  };

  getTwoYearsBeforeSaftFile(): Observable<SaftFile> {
    return this.http.get<SaftFile>(`${endpoint}/saftFiles/5f103311bf5f110d58f31b7a`);
  };

  getThreeYearsBeforeSaftFile(): Observable<SaftFile> {
    return this.http.get<SaftFile>(`${endpoint}/saftFiles/5f103325bf5f110d58f31b7b`);
  };

  getFourYearsBeforeSaftFile(): Observable<SaftFile> {
    return this.http.get<SaftFile>(`${endpoint}/saftFiles/5f103331bf5f110d58f31b7c`);
  };
}
