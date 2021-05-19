import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private baseURL = "http://localhost:8090/api/v1/Formateurs";

  constructor(private httpClient: HttpClient) { }



  getFormateurList(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }


  createFormateur(formateur: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, formateur);
  }

 

  updateFormateur(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`,value);
  }

  deleteFormateur(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }
  getFormateurById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
}
