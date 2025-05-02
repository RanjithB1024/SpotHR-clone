import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resetpsw',
  templateUrl: './resetpsw.component.html',
  styleUrls: ['./resetpsw.component.scss']
})
export class ResetpswComponent implements OnInit {
  onSubmit() {
  }
  ResetForm:FormGroup
    // onLogin: any;
  
  

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.ResetForm = this.formBuilder.group({
      EMPID: ['', [Validators.required, Validators.minLength(7)]],
     
      
    });
  }



  ngOnInit(): void {}
    

    handle(){
      
      if(this.ResetForm.valid){
        console.log("this is the corresponding if block");
        
        const enteredEMPID = this.ResetForm.get('EMPID')?.value;
       
    
        const expectedEMPID ='5001001'
       
  
       
    
         if (enteredEMPID == expectedEMPID ) {
          
          console.log("this is the corresponding if nested block");
        
          Swal.fire({  
            icon: 'success',  
            text: 'OTP send to mail',  
            
          })
          this.router.navigate(['/otp']);
        this.ResetForm.reset();
        } else {
          Swal.fire({  
            icon: 'error',  
            title: 'Oops...',  
            text: 'invalid Employye id',  
            
          })  
        
        }
      }
    }
}
