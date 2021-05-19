import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domaine } from '../Model/domaine';
import { Formation } from '../Model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseURL = 'http://localhost:8090/api/v1/Formation';

  constructor(private httpClient: HttpClient) { }


  getFormationList(): Observable<any>{
    return this.httpClient.get<Formation[]>(`${this.baseURL}`);
  }

  createFormation(formation: object): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, formation);
  }

  getFormationById(id: number): Observable<any>{
    return this.httpClient.get<Formation>(`${this.baseURL}/${id}`);
  }
  deleteFormation(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }
  getDomaines(): Observable<Domaine[]>{
    return this.httpClient.get<Domaine[]>(`http://localhost:8090/api/v1/Domaine`);
  }
  updateFormation(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${id}`, value);
  }
  affecterDomaine(idd: number, idf: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.put(`${this.baseURL}/${idd}/${idf}`);
  }
}
