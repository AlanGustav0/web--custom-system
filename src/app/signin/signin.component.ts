import { UserService } from './../core/services/user/user.service';
import { Router } from '@angular/router';

import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../core/services/auth/auth.service';
import { SigninRequest } from '../core/services/interfaces/request/signin-request.interface';
import { AnimationOptions } from 'ngx-lottie';
import { Store } from '@ngxs/store';
import { Login } from '../core/ngxs/app.actions';
import { AppSelectors } from './../core/ngxs/app.selectors';
import { AppState } from '../core/ngxs/app.state';


@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public signinForm!: FormGroup;
  public _unsub$ = new Subject<void>();
  options: AnimationOptions = {
    path: './../../assets/lottie/signin.json',
  };
  public loggedError = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _store: Store
  ) {
  }

  ngOnInit(): void {
    this.signinForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const signinRequest: SigninRequest = {
      userName: this.signinForm?.get('userName')?.value,
      password: this.signinForm?.get('password')?.value,
    };

    this._store.dispatch(new Login(signinRequest));
  }

  showPassword() {
    const password = this._elementRef.nativeElement.querySelector('#password');
    const iconButton =
      this._elementRef.nativeElement.querySelector('#icon-button');
    iconButton?.classList.toggle('hidden');

    if (password?.getAttribute('type') === 'text') {
      password?.setAttribute('type', 'password');
    } else {
      password?.setAttribute('type', 'text');
    }
  }
}
