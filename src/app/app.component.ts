import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonsbarComponent } from './components/shared/buttonsbar/buttonsbar.component';
import { ToggleThemeComponent } from './components/shared/toggle-theme/toggle-theme.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToggleThemeComponent, ButtonsbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-material-app';
}
