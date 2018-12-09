import { Component, OnInit } from '@angular/core';
import { SelectItem } from '../../models/select-item';
import { SelectDelegate } from '../partial/list-with-search/list-with-search.component';
import { Mentor } from '../../models/mentor';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.scss']
})
export class MentorListComponent implements OnInit, SelectDelegate {

  selectItems: SelectItem[] = [
    { value: '0', text: 'aap0' },
    { value: '1', text: 'aap1' },
    { value: '2', text: 'aap2' }
  ];


  onSelectedItemChanged(value: string) : void {
    console.log('dit is de value: ' + value);
    console.log('userSErvice: ' + this.userService);
    
    this.userService.getMentorById(Number(value)).subscribe(
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

  mentor: Mentor = {
    id: 1,
    fullName: '....',
    birthday: new Date(),
    gender: 'FEMALE',
    education: '........'
  };
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadMentors();
  }

  loadMentors() : void {
    this.userService.getAllMentors().subscribe(
      data => {
        console.log(data);

        this.selectItems = [];
        for( let mentor of data) {
          this.selectItems.push({value: mentor.id.toString(), text: mentor.fullName});
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
