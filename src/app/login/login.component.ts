import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder,private readonly _elementRef:ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm.getRawValue());
  }

  showPassword(){
    let password = this._elementRef.nativeElement.querySelector("#password");
    let iconButton = this._elementRef.nativeElement.querySelector("#icon-button");
    iconButton?.classList.toggle('hidden');

    if(password?.getAttribute('type') === 'text'){
      password?.setAttribute('type','password');
    }else{
      password?.setAttribute('type','text');
    }
  }
}
