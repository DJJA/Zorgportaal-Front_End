import { Component, OnInit, ReflectiveKey } from '@angular/core';
import { User } from '../../models/user';
import { Gender } from '../../models/gender';
import { Client } from '../../models/client';
import { Mentor } from '../../models/mentor';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  public user: User = new User;
  public client: Client = new Client;
  public mentor: Mentor = new Mentor;
  public role: string = 'CLIENT';

  public title: string = 'User Editor';

  genderValues() : Array<string> {
    // var keys = Object.keys(Gender);
    // return keys.slice(keys.length / 2);
    return ['FEMALE', 'MALE'];
  }

  getRoles() : Array<string> {
    return ['CLIENT', 'MENTOR'];
  }

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    // console.log('id: ' + this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log('role: ' + this.activatedRoute.snapshot.paramMap.get('role'));

    
    this.role = this.activatedRoute.snapshot.paramMap.get('role');

    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("param: " + idParam);
    // Load user data if id is set
    if (idParam === null || idParam === undefined || idParam === 'null') return;
    let id = Number(idParam);
    this.client.id = id;
    this.mentor.id = id;
    if (this.role === 'CLIENT') {
      this.userService.getClientById(id).subscribe(
        data => {
          this.client = data;
          this.user = data;
        }        
      );
    } else if (this.role === 'MENTOR') {
      this.userService.getMentorById(id).subscribe(
        data => {
          this.mentor = data;
          this.user = data;
        }
      );
    }
  }

  getTitle() : string {
    console.log('id ' + this.user.id);
    if (this.user.id === null || this.user.id === undefined) {
      return 'Add new ' + this.role.toString().toLowerCase();
    } else {
      return 'Edit ' + this.user.fullName;
    }
  }

  saveUser() : void {
    if (this.role === 'CLIENT') {
      this.client.id = this.user.id;
      this.client.fullName = this.user.fullName;
      // this.client.birthday = this.user.birthday;
      this.client.gender = this.user.gender;
      console.log(this.client);

      if (this.client.id === null || this.client.id === undefined) {
        this.userService.addClient(this.client);
      } else {
        this.userService.updateClient(this.client);
      }
    } else if (this.role === 'MENTOR') {
      this.mentor.id = this.user.id;
      this.mentor.fullName = this.user.fullName;
      // this.mentor.birthday = this.user.birthday;
      this.mentor.gender = this.user.gender;
      console.log(this.mentor);

      if (this.mentor.id === null || this.mentor.id === undefined) {
        this.userService.addMentor(this.mentor);
      } else {
        this.userService.updateMentor(this.mentor);
      }
    } else {
      console.log('ERROR: Unknown role');
    }
  }
}
