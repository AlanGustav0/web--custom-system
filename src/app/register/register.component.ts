import { RegisterRequest } from '../core/services/login/request/register-request.interface';
import { RegisterService } from './../core/register.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm!: FormGroup;
  public _unsub$ = new Subject<void>();

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const registerRequest: RegisterRequest = {
      userName: this.registerForm?.get('userName')?.value,
      password: this.registerForm?.get('password')?.value,
    };
    this._registerService
      .register(registerRequest)
      .pipe(takeUntil(this._unsub$))
      .subscribe({
        next: (response) => {
          console.log(response);
        },
      });
  }

  checkPasswordValidation(): boolean {
    let password = this.registerForm?.get('password')?.value;
    let confirmPassword = this.registerForm?.get('confirmPassword')?.value;

    if(password !== confirmPassword){
      return true;
    }
    return false;
  }
  ngOnDestroy(): void {
    this._unsub$.next();
    this._unsub$.complete();
  }
}
