import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup 
  submitted = false
  loading =false

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formSignup();
  }
  formSignup(){
    this.signupForm =this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required],
      email:['', [Validators.required,Validators.email]],
      number:['', Validators.required]
    })
  }
  get f() {
    return this.signupForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true
    
    console.log(this.signupForm.value);
    this.signupForm.reset();

    if(this.signupForm.value){
      alert('Thank you for signup.Your signup process is successfull');
    }
    else{
      alert('Not successfull')
    }
    
  }


  
}
