import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organisme } from '../Model/organisme';

@Injectable({
  providedIn: 'root'
})
export class OrganismeService {
  private baseURL = "http://localhost:8090/api/v1/Organisme";

  constructor(private httpClient: HttpClient) { }

  /*getOrganismeList(): Observable<Organisme[]>{
    return this.httpClient.get<Organisme[]>(`${this.baseURL}`);
  }*/
  
  getOrganismeList(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }

  createOrganisme(organisme: Organisme): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, organisme);
  }

  getOrganismeById(id: number): Observable<Organisme>{
    return this.httpClient.get<Organisme>(`${this.baseURL}/${id}`);
  }
  deleteOrganisme(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{ responseType: 'text' });
  }
}
