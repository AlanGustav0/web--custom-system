import { Router } from '@angular/router';

import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SigninService } from '../core/services/signin/signin.service';
import { SigninRequest } from '../core/services/interfaces/request/signin-request.interface';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit, OnDestroy {
  public signinForm!: FormGroup;
  public _unsub$ = new Subject<void>();
  options: AnimationOptions = {
    path:'./../../assets/lottie/signin.json'
  }

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _signinService: SigninService,
    private readonly _router: Router
  ) {}

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
    this._signinService
      .auth(signinRequest)
      .pipe(takeUntil(this._unsub$))
      .subscribe({
        next: () => {
          this._router.navigate(['home']);
        },
      });
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

  ngOnDestroy(): void {
    this._unsub$.next();
    this._unsub$.complete();
  }
}
