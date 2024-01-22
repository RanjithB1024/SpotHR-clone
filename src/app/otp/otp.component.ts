import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OTPComponent implements OnInit{

  onSubmit() {
  }
  ForgetPasswordForm: FormGroup
    onLogin: any;
  
  

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.ForgetPasswordForm = this.formBuilder.group({
      OTP: ['', [Validators.required, Validators.minLength(4)]],
      Confirmpassword: ['', [Validators.required, Validators.minLength(3)]],
      
    });
  }

  ngOnInit(): void {

  }

  handle(){
    if(this.ForgetPasswordForm.valid){
      const enteredOTP = this.ForgetPasswordForm.get('OTP')?.value;
      const enteredConfirmpassword = this.ForgetPasswordForm.get('Confirmpassword')?.value;
  
      const expectedOTP ='123456'
      const expectedConfirmpassword = 'sai1996'

     
  
       if (enteredOTP == expectedOTP && enteredConfirmpassword == expectedConfirmpassword) {
        
        
      
        Swal.fire({  
          icon: 'success',  
          text: 'Password has Changed go to login',  
          
        })
        this.router.navigate(['/sigup']);
      this.ForgetPasswordForm.reset();
      } else {
        Swal.fire({  
          icon: 'error',  
          title: 'Oops...',  
          text: 'invalid Employee Id are password!',  
          
        })  
      
      }
    }
  }
}
