import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/models/mentor';

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
  
  constructor() { }

  ngOnInit() {
  }

  addClientToMentor() : void {

  }

  removeClientFromMentor() : void {
    
  }
}
