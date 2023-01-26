import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      name:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    })
  }

  onSubmit(){
    console.log(this.registerForm.getRawValue());
  }
}
