import { CommonModule, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/interfaces/user';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signInForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router,private userservice:UserService) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]], // Added minlength validation
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
         
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!#$%^&*_=+-]).{8,12}$')
        ]
      ]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
     this.userservice.register(this.signInForm.value as User).subscribe((msg)=>{
        console.log(msg);
     })
    }
  }

  get password() {
    return this.signInForm.get('password');
  }
  get email() {
    return this.signInForm.get('email');
  }
  get name() {
    return this.signInForm.get('name');
  }
}