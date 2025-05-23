import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-buttonsbar',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './buttonsbar.component.html',
})
export class ButtonsbarComponent {

}
