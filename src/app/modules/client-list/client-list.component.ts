import { Component, OnInit } from '@angular/core';
import { SelectItem } from '../../models/select-item';
import { SelectDelegate } from '../partial/list-with-search/list-with-search.component';
import { UserService } from '../../services/user.service';
import { Client } from '../../models/client';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  selectItems: SelectItem[] = [
    { value: '0', text: 'aap0' },
    { value: '1', text: 'aap1' },
    { value: '2', text: 'aap2' }
  ];

  client: Client = {
    id: 1,
    fullName: '......',
    birthday: new Date(),
    gender: 'MALE',
    carePlan: '.....'
  };


  onSelectedItemChanged(value: string) {
    console.log('dit is de value: ' + value);
    this.userService.getClientById(Number(value)).subscribe(
      data => {
        this.client = data;
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
    )
  }

  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadClients();
  }

  loadClients() : void {
    this.userService.getAllClients().subscribe(
      data => {
        console.log(data);

        this.selectItems = [];
        for( let client of data) {
          this.selectItems.push({value: client.id.toString(), text: client.fullName});
        }
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
}
