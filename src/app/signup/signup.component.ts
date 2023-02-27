
import { SignupService } from '../core/services/signup/sigunp.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SignupRequest } from '../core/services/interfaces/request/signup-request.interface';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  public signupForm!: FormGroup;
  public _unsub$ = new Subject<void>();
  options: AnimationOptions = {
    path:'./../../assets/lottie/signup.json'
  }

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _signupService: SignupService,
    private readonly _router:Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const signupRequest: SignupRequest = {
      userName: this.signupForm?.get('userName')?.value,
      password: this.signupForm?.get('password')?.value,
    };
    this._signupService
      .signup(signupRequest)
      .pipe(takeUntil(this._unsub$))
      .subscribe({
        next:() => {
          this._router.navigate(['login']);
        }
      });
  }

  checkPasswordValidation(): boolean {
    const password = this.signupForm?.get('password')?.value;
    const confirmPassword = this.signupForm?.get('confirmPassword')?.value;

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
