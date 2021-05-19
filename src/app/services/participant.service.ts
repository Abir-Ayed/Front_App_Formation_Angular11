import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../Model/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private baseURL = "http://localhost:8090/api/v1/participant";

  constructor(private httpClient: HttpClient) { }

  getParticipantList(): Observable<any>{
    return this.httpClient.get<Participant[]>(`${this.baseURL}`);
  }

  createParticipant(participant: Participant): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, participant);
  }
  deleteParticipant(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }
  getParticipantById(id: number): Observable<any>{
    return this.httpClient.get<Participant>(`${this.baseURL}/${id}`);
  }
  updateParticipant(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${id}`, value);
  }
}
