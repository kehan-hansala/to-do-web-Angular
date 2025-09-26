import { Component } from '@angular/core';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'to-do-web';
}
