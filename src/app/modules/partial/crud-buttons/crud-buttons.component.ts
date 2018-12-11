import { Component, OnInit, Input } from '@angular/core';
import { CrudButtonsDelegate } from 'src/app/delegates/crud-buttons-delegate';

@Component({
  selector: 'app-crud-buttons',
  templateUrl: './crud-buttons.component.html',
  styleUrls: ['./crud-buttons.component.scss']
})
export class CrudButtonsComponent implements OnInit {

  @Input() crudButtonsDelegate: CrudButtonsDelegate;
  
  constructor() { }

  ngOnInit() {
  }

}
