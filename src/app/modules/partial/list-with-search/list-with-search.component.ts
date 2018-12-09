import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from '../../../models/select-item';

export interface SelectDelegate {
  onSelectedItemChanged(value: string) : void;
}

@Component({
  selector: 'app-list-with-search',
  templateUrl: './list-with-search.component.html',
  styleUrls: ['./list-with-search.component.scss']
})
export class ListWithSearchComponent implements OnInit {

  @Input() selectItems: SelectItem[];
  @Input() selectDelegate: SelectDelegate;

  constructor() { }

  getSelectItems(): SelectItem[] {
    return this.selectItems;
  }

  ngOnInit() {
  }
  
}
