import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../Model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseURL = "http://localhost:8090/api/v1/Profils";

  constructor(private httpClient: HttpClient) { }

  getProfileList(): Observable<Profile[]>{
    return this.httpClient.get<Profile[]>(`${this.baseURL}`);
  }

 
  createProfile(profil: Profile): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, profil);
  }


  getProfileById(id: number): Observable<Profile>{
    return this.httpClient.get<Profile>(`${this.baseURL}/${id}`);
  }
  

  updateProfile(id: number, profil: Profile): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, profil);
  }
  deleteProfile(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{ responseType: 'text' });
  }
}
