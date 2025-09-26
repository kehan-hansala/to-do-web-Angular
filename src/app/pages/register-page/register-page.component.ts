import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

}
