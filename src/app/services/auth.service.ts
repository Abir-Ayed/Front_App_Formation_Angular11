import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../auth/user.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';


const USER_KEY = 'auth-user';
const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private baseUrl = 'http://localhost:8090/auth/';

    constructor(private http: HttpClient,  private router: Router){}
    signup(user: User): Observable<any>{

        return this.http.post(this.baseUrl + 'signup', user, { headers, responseType: 'text'})
                        .pipe(catchError(this.handleError));;
    }
    login(user: string, password: string){

        return this.http.post<any>(this.baseUrl + 'login',
            {userName: user, password:password}, {headers})
            .pipe(catchError(this.handleError),
                map(userData => {
                  sessionStorage.setItem("username", user);
                  let tokenStr = "Bearer " + userData.token;
                  console.log("Token---  " + tokenStr);
                  sessionStorage.setItem("token", tokenStr);
                  sessionStorage.setItem("roles", JSON.stringify(userData.roles));
                  return userData;
                })
            );
    }

    logout(){
        sessionStorage.clear()
        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean{
        return sessionStorage.getItem('username') !== null;
    }

    private handleError(httpError: HttpErrorResponse) {
        let message:string = '';

        if (httpError.error instanceof ProgressEvent) {
            console.log('in progrss event')
            message = "Network error";
        }

        else {
            message = httpError.error.message;

          console.error(
            `Backend returned code ${httpError.status}, ` +
            `body was: ${httpError.error}`);
        }

        return throwError(message);
      }
      public getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
      }
}
