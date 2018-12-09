import { Component } from '@angular/core';
import { SelectItem } from './models/select-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectItems: SelectItem[] = [
    { value: '0', text: 'aap0' },
    { value: '1', text: 'aap1' },
    { value: '2', text: 'aap2' }
  ];

  title = 'zorgportaal';
}
