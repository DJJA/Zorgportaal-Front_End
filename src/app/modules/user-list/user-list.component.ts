import { Component, OnInit } from '@angular/core';
import { SelectItem } from '../../models/select-item';
import { SelectDelegate } from '../partial/list-with-search/list-with-search.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  selectItems: SelectItem[] = [
    { value: '0', text: 'aap0' },
    { value: '1', text: 'aap1' },
    { value: '2', text: 'aap2' }
  ];

  selectDelegate: SelectDelegate = {
    onSelectedItemChanged(value: string) {
      console.log('dit is de value: ' + value);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
