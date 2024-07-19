import { CommonModule, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators,FormBuilder ,FormGroup} from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private userservice:UserService,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name:['',Validators.required],
    
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const {name,password}=this.loginForm.value
      this.userservice.login(name,password).subscribe((token)=>{
        
        if(token){
          console.log(token);
          localStorage.setItem('authorization',token);
          this.router.navigate(['/dashboard'])
        }
      })
    }
  }
}


