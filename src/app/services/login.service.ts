import { Injectable } from '@angular/core';
import { UserCredentials } from '../models/user-credentials';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Token } from 'src/app/models/token';

import { environment } from 'src/environments/environment'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  validateUserCredentials(userCredentials: UserCredentials) : void {
    var token = this.http.post<Token>(environment.baseURL + "sessions", userCredentials, httpOptions);

    token.subscribe(
      data => {
        console.log(data);
        localStorage.setItem('token', data.token);
      },
      (err: HttpErrorResponse) => { // Could get error message from server; it's sends an error object with the resource name, error code and error message
        switch(err.status) {
          case 0:
            // Unknown error, happens when there's no connection
            // console.log('Could not reach authentication server. Please try again later.');
            console.log('Something went wrong when trying to log in');
            break;
          case 401:
            // Unauthorized, happens when the given username password combo does not exist in the database
            console.log('The entered username password combination does not exist in the database');
            break;
          default:
            // Some unknown untracked error happened
            console.log('Something went wrong when trying to log in');
            break;
        }   
      }
    );
  }

  logOut() : void {
    localStorage.removeItem('token');
  }
}