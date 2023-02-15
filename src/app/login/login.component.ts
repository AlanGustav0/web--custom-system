import { LoginService } from './../core/services/login/login.service';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

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
    private readonly _loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const user = this.loginForm.getRawValue();
    this._loginService
      .authService(user)
      .pipe(takeUntil(this._unsub$))
      .subscribe({
        next: (response) => {
          console.log(response);
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
