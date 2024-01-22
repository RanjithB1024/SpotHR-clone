import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  onSubmit() {
  }
    SignupForm: FormGroup;
    onLogin: any;
  
  

  constructor(private formBuilder: FormBuilder,private router: Router,private ngxService: NgxUiLoaderService) {
    this.SignupForm = this.formBuilder.group({
      EMPID: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      
    });
  }
  ngOnInit(): void {
    this.ngxService.startLoader("loader-06"); // start foreground spinner of the loader "loader-02" with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stopLoader("loader-06"); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 5000);
  }
    handle(){
      if(this.SignupForm.valid){
        const enteredEMPID = this.SignupForm.get('EMPID')?.value;
        const enteredPassword = this.SignupForm.get('password')?.value;
    
        const expectedEMPID ='BTIN100144'
        const expectedPassword =  'sai1996'
  
       
    
         if (enteredEMPID == expectedEMPID && enteredPassword == expectedPassword) {
          
          
        
          this.router.navigate(['/sample']);
        this.SignupForm.reset();
        } else {
          Swal.fire({  
            icon: 'error',  
            title: 'Oops...',  
            text: 'invalid Employee Id are password!',  
            
          })  
        
        }
      }
    }
    open(){
      this.router.navigate(['/reset']);
    }
}
