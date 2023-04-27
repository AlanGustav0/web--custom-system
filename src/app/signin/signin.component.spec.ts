import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LottieModule } from 'ngx-lottie';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AuthService } from '../core/services/auth/auth.service';
import { TokenResponse } from '../core/services/interfaces/response/token-response.interface';
import { UserResponse } from '../core/services/interfaces/response/user-response.interface';


export function playerFactory(): any {
  return import('lottie-web');
}

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let signinService: AuthService;
  let router: Router;

  const user:UserResponse = {
    userName: 'user',
    role: 'USER',
    profileStyle: 'default'
  }

  const tokenResponse:TokenResponse = {
    user: user,
    token: 'token'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports:[HttpClientTestingModule,ReactiveFormsModule,LottieModule.forRoot({ player: playerFactory })]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    signinService = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSubmit should be navigate to /home when has token',() => {
    const form = component.signinForm;
    const spyRouter = spyOn(router, 'navigate');
    spyOn(signinService, 'auth').and.returnValues(of(tokenResponse));
    form.patchValue({
      userName: 'user',
      password: '1234',
    });
    fixture.detectChanges();
    const button: HTMLElement = fixture.nativeElement.querySelector('.signin__container__content__form__inner__button');
    button.click();
    expect(spyRouter).toHaveBeenCalledWith(['/home']);
  });

  it('#onSubmit should be throw error when it has been called',() => {
    const form = component.signinForm;
    const spyRouter = spyOn(router, 'navigate');
    spyOn(signinService, 'auth').and.returnValues(throwError(() => new Error('Error')));
    form.patchValue({
      userName: 'user',
      password: '1234',
    });
    fixture.detectChanges();
    const button: HTMLElement = fixture.nativeElement.querySelector('.signin__container__content__form__inner__button');
    button.click();
    expect(spyRouter).not.toHaveBeenCalledWith(['home']);
  });

  it(`${SigninComponent.prototype.showPassword.name} should be has attribute (password) when it has been called`,() => {
    const password = fixture.nativeElement.querySelector('#password');
    const form = component.signinForm;
    form.patchValue({
      userName: 'user',
      password: '1234',
    });
    fixture.detectChanges();
    expect(password.getAttribute('type')).toEqual('password');
  });

  it(`${SigninComponent.prototype.showPassword.name} should be has attribute (text) when iconButton has been clicked`,() => {
    const password = fixture.nativeElement.querySelector('#password');
    const iconButton:HTMLElement = fixture.nativeElement.querySelector('#icon-button');
    const form = component.signinForm;
    form.patchValue({
      userName: 'user',
      password: '1234',
    });
    iconButton.click();
    fixture.detectChanges();
    expect(password.getAttribute('type')).toEqual('text');
  });

  it(`${SigninComponent.prototype.showPassword.name} should be has attribute (password) when iconButton has been clicked two twices`,() => {
    const password = fixture.nativeElement.querySelector('#password');
    const iconButton:HTMLElement = fixture.nativeElement.querySelector('#icon-button');
    const form = component.signinForm;
    form.patchValue({
      userName: 'user',
      password: '1234',
    });
    iconButton.click();
    fixture.detectChanges();
    iconButton.click();
    fixture.detectChanges();
    expect(password.getAttribute('type')).toEqual('password');
  });
});
