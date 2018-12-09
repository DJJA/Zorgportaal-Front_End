import { Component, OnInit, Input } from '@angular/core';
import { Mentor } from '../../../models/mentor';

@Component({
  selector: 'app-mentor-view',
  templateUrl: './mentor-view.component.html',
  styleUrls: ['./mentor-view.component.scss']
})
export class MentorViewComponent implements OnInit {
  @Input() mentor: Mentor;
  
  constructor() { }

  ngOnInit() {
  }

}
