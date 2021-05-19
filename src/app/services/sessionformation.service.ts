import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sessionformation } from '../Model/sessionformation';

@Injectable({
  providedIn: 'root'
})
export class SessionformationService {

  private baseURL = 'http://localhost:8090/api/v1/SessionFormation';
  constructor(private http: HttpClient ) { }
  createSessionformation(sessionformation: object): Observable<any> {
    return this.http.post(`${(this.baseURL)}`, sessionformation);
  }
  getSessionformationList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);

  }

  deleteSessionformation(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }
  getSessionformation(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  updateSessionformation(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, value);
  }
  getSessionById(id: number): Observable<any>{
    return this.http.get<Sessionformation>(`${this.baseURL}/${id}`);
  }
}
