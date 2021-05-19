//import { User } from '../auth/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private baseUrl = 'http://localhost:8090/user/';
    constructor(private http: HttpClient){}
    getAllUsers(): Observable<any>{
        return this.http.get(this.baseUrl+'allusers', {responseType:'text'})
                        .pipe(catchError(this.handleError));
    }
    getByUserRole():  Observable<any>{
      return this.http.get(this.baseUrl+'displayuser', {responseType:'text'})
                      .pipe(catchError(this.handleError));
    }
    getByAdminRole():  Observable<any>{
      return this.http.get(this.baseUrl+'displayadmin', {responseType:'text'})
                      .pipe(catchError(this.handleError));
    }

    private handleError(httpError: HttpErrorResponse) {
      let message:string = '';
      if (httpError.error instanceof ProgressEvent) {
        console.log('Evenement en cours ...')
        message = "Erreur de réseau !";
      }

      else {
        message = JSON.parse(httpError.error).message;

        console.error(
          `Backend returned code ${httpError.status}, ` +
          `body was: ${httpError.error}`);
    }
    return throwError(
      'Quelque chose horrible est arrivé; Veuillez réessayer plus tard...' + message);
    }
}
