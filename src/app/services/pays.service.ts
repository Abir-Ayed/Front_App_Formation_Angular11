import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pays } from '../Model/pays';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  private baseURL = "http://localhost:8090/api/v1/Pays";

  constructor(private httpClient: HttpClient) { }

  
  getPaysList(): Observable<Pays[]>{
    return this.httpClient.get<Pays[]>(`${this.baseURL}`);
  }

  createPays(pays: Pays): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, pays);
  }

  getPaysById(id: number): Observable<Pays>{
    return this.httpClient.get<Pays>(`${this.baseURL}/${id}`);
  }
  deletePays(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{ responseType: 'text' });
  }
}
