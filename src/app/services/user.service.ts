import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Client } from '../models/client';
import { Mentor } from '../models/mentor';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

// TODO: global http options and error default handling based on error status code
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllClients() : Observable<Client[]> {
    return this.httpClient.get<Client[]>(environment.baseURL + "clients", httpOptions);
  }

  getAllMentors() : Observable<Mentor[]> {
    return this.httpClient.get<Mentor[]>(environment.baseURL + "mentors", httpOptions);
  }

  getMentorById(id: number) : Observable<Mentor> {
    return this.httpClient.get<Mentor>(environment.baseURL + "mentors/" + id, httpOptions);    
  }

  getClientById(id: number) : Observable<Client> {
    return this.httpClient.get<Client>(environment.baseURL + "clients/" + id, httpOptions);
  }

  addClient(client: Client) : void {
    let response = this.httpClient.post(environment.baseURL + "clients", client, httpOptions);

    response.subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => { // Could get error message from server; it's sends an error object with the resource name, error code and error message
        switch(err.status) {
          case 0:
            // Unknown error, happens when there's no connection
            // console.log('Could not reach authentication server. Please try again later.');
            console.log('Something went wrong');
            break;
          case 401:
            // Unauthorized
            console.log('You are not authorized');
            break;
          default:
            // Some unknown untracked error happened
            console.log('Something went wrong (default)' + err.status);
            break;
        }   
      }
      // (response: HttpResponse<any>) => {
      //   console.log(response.status);
      // }
      // response => {
      //   console.log(response.status);
      // }
    );
  }

  updateClient(client: Client) : void {

  }

  addMentor(mentor: Mentor) : void {
    let response = this.httpClient.post(environment.baseURL + "mentors", mentor, httpOptions);

    response.subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => { // Could get error message from server; it's sends an error object with the resource name, error code and error message
        switch(err.status) {
          case 0:
            // Unknown error, happens when there's no connection
            // console.log('Could not reach authentication server. Please try again later.');
            console.log('Something went wrong');
            break;
          case 401:
            // Unauthorized
            console.log('You are not authorized');
            break;
          default:
            // Some unknown untracked error happened
            console.log('Something went wrong (default)' + err.status);
            break;
        }   
      }
    );
  }

  updateMentor(mentor: Mentor) : void {

  }
}
