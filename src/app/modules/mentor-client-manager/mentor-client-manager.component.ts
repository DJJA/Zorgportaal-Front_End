import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/models/mentor';
import { SelectDelegate } from '../../delegates/select-delegate';
import { SelectItem } from 'src/app/models/select-item';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-mentor-client-manager',
  templateUrl: './mentor-client-manager.component.html',
  styleUrls: ['./mentor-client-manager.component.scss']
})
export class MentorClientManagerComponent implements OnInit {

  mentor: Mentor = {
    id: 1,
    fullName: '....',
    birthday: new Date(),
    gender: 'FEMALE',
    education: '........'
  };

  mentorClientsSelectItems: SelectItem[] = [
    { value: '0', text: 'aap0' },
    { value: '1', text: 'aap1' },
    { value: '2', text: 'aap2' }
  ];

  availableClientsSelectItems: SelectItem[] = [
    { value: '0', text: 'aap0' },
    { value: '1', text: 'aap1' },
    { value: '2', text: 'aap2' }
  ];

  mentorsClientsSelectDelegate: SelectDelegateWithidex = new SelectDelegateWithidex;
  availableClientsSelectDelegate: SelectDelegateWithidex = new SelectDelegateWithidex;
  
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {

    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("param: " + idParam);
    // Load user data if id is set
    if (idParam === null || idParam === undefined || idParam === 'null') return;
    let id = Number(idParam);

    this.loadMentor(id);
    this.loadMentorClients(id);
    this.loadAvailableClients();
  }

  addClientToMentor() : void {
    console.log('Add client to mentor entered');
    let client: Client = {
      id: this.availableClientsSelectDelegate.selectedIndex,
      fullName: undefined,
      birthday: undefined,
      gender: undefined,
      carePlan: undefined,
      mentors: undefined
    };

    this.userService.addClientToMentor(this.mentor.id, client).subscribe(
      data => {
        this.loadMentorClients(this.mentor.id);
        this.loadAvailableClients();
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
        alert('Er ging iets mis');  
      }
    );
  }

  removeClientFromMentor() : void {
    this.userService.removeClientFromMentor(this.mentor.id, this.mentorsClientsSelectDelegate.selectedIndex).subscribe(
      data => {
        this.loadMentorClients(this.mentor.id);
        this.loadAvailableClients();
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
        alert('Er ging iets mis');  
      }
    );
  }

  loadMentor(mentorId: number) : void {
    this.userService.getMentorById(mentorId).subscribe(
      data => {
        this.mentor = data;
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

  loadMentorClients(mentorId: number) : void {
    this.userService.getClientsByMentorId(mentorId).subscribe(
      data => {
        console.log(data);

        this.mentorClientsSelectItems = [];
        for( let client of data) {
          this.mentorClientsSelectItems.push({value: client.id.toString(), text: client.fullName});
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

  loadAvailableClients() : void {
    this.userService.getAllClients().subscribe(
      data => {
        console.log(data);

        this.availableClientsSelectItems = [];
        for( let client of data) {
          this.availableClientsSelectItems.push({value: client.id.toString(), text: client.fullName});
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

export class SelectDelegateWithidex implements SelectDelegate {
  onSelectedItemChanged(value: string): void {
    this.selectedIndex = Number(value);
  }
  public selectedIndex: number;

}
