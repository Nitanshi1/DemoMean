import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SigninComponent } from '../signin/signin.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Footer1Component } from '../footer1/footer1.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LoginComponent,SigninComponent,RouterOutlet,RouterModule,Footer1Component],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
