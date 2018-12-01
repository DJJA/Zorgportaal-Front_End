import { Component, OnInit, ReflectiveKey } from '@angular/core';
import { User } from '../../models/user';
import { Gender } from '../../models/gender';
import { Client } from '../../models/Client';
import { Mentor } from '../../models/Mentor';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  private user: User = new User;
  private client: Client = new Client;
  private mentor: Mentor = new Mentor;
  private role: string = 'CLIENT';
  // private user: User = {
  //   id: 0,
  //   fullName: '',
  //   birthday: null,
  //   gender: 'FEMALE',
  // };

  genderValues() : Array<string> {
    // var keys = Object.keys(Gender);
    // return keys.slice(keys.length / 2);
    return ['FEMALE', 'MALE'];
  }

  getRoles() : Array<string> {
    return ['CLIENT', 'MENTOR'];
  }

  constructor() {}

  ngOnInit() {
  }

  saveUser() : void {
    if (this.role === 'CLIENT') {
      this.client.id = this.user.id;
      this.client.fullName = this.user.fullName;
      this.client.birthday = this.user.birthday;
      this.client.gender = this.user.gender;
      console.log(this.client);
    } else if (this.role === 'MENTOR') {
      this.mentor.id = this.user.id;
      this.mentor.fullName = this.user.fullName;
      this.mentor.birthday = this.user.birthday;
      this.mentor.gender = this.user.gender;
      console.log(this.mentor);
    } else {
      console.log('ERROR: Unknown role');
    }
  }
}
