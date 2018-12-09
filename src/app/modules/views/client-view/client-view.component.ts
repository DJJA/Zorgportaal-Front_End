import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {
  @Input() client: Client;
  
  constructor() { }

  ngOnInit() {
  }

}
