import { Router } from '@angular/router';
import { LoginService } from './../core/services/login/login.service';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { LoginRequest } from '../core/services/login/request/login-request.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm!: FormGroup;
  public _unsub$ = new Subject<void>();

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _loginService: LoginService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const loginRequest: LoginRequest = {
      userName: this.loginForm?.get('userName')?.value,
      password: this.loginForm?.get('password')?.value,
    };
    this._loginService
      .authService(loginRequest)
      .pipe(takeUntil(this._unsub$))
      .subscribe({
        next: (response) => {
          this._router.navigate(['home']);
        },
      });
  }

  showPassword() {
    let password = this._elementRef.nativeElement.querySelector('#password');
    let iconButton =
      this._elementRef.nativeElement.querySelector('#icon-button');
    iconButton?.classList.toggle('hidden');

    if (password?.getAttribute('type') === 'text') {
      password?.setAttribute('type', 'password');
    } else {
      password?.setAttribute('type', 'text');
    }
  }

  ngOnDestroy(): void {
    this._unsub$.next();
    this._unsub$.complete();
  }
}
