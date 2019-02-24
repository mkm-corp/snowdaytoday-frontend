import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://api.snowday.today"
  constructor(private http: HttpClient) {

  }
  getValue(loc: string) {
    var r = this.http.get<APIResponse>(this.url+"/loc")
    return r
  }
}

export interface APIResponse {
  chance: number,
  date: Date
  error: String
}