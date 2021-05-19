import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domaine } from '../Model/domaine';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  private baseURL = 'http://localhost:8090/api/v1/Domaines';
  constructor(private httpClient: HttpClient) { }

  getDomaineList(): Observable<Domaine[]>{
    return this.httpClient.get<Domaine[]>(`${this.baseURL}`);
  }

  createDomaine(domaine: Domaine): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, domaine);
  }

  getDomaineById(id: number): Observable<Domaine>{
    return this.httpClient.get<Domaine>(`${this.baseURL}/${id}`);
  }
  deleteDomaine(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{ responseType: 'text' });
  }
}
