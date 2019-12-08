import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl:string;

  constructor(
    private _http:HttpClient
  ) { 
    this.apiUrl = '../../assets/init-data.json';
  }

  getData() {
    return this._http.get<any>(this.apiUrl);
  }
}
