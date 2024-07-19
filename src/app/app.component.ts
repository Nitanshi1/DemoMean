import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Footer1Component } from './components/footer1/footer1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NavBarComponent,Footer1Component,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoProject';
}
