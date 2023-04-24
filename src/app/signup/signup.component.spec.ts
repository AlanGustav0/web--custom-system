import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { SignupService } from '../core/services/signup/sigunp.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

export function playerFactory(): any {
  return import('lottie-web');
}

describe('LoginComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let signupService: SignupService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        LottieModule.forRoot({ player: playerFactory }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    signupService = TestBed.inject(SignupService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be onSubmit navigate to login when it has been called', () => {
    spyOn(signupService, 'signup').and.returnValues(of(null));
    const spyRouter = spyOn(router, 'navigate')
    const form = component.signupForm;
    form.patchValue({
      userName: 'user',
      password: '1234',
      confirmPassword:'1234'
    });
    fixture.detectChanges();
    const button: HTMLElement = fixture.nativeElement.querySelector('#submit');
    button.click();
    expect(spyRouter).toHaveBeenCalledWith(['login']);
  });

  it('should be onSubmit not navigate to login when it is called', () => {
    spyOn(signupService, 'signup').and.returnValues(of(null));
    const spyRouter = spyOn(router, 'navigate')
    const form = component.signupForm;
    form.patchValue({
      userName: 'user',
      password: '1234',
      confirmPassword:'123'
    });
    fixture.detectChanges();
    const button: HTMLElement = fixture.nativeElement.querySelector('#submit');
    button.click();
    expect(spyRouter).not.toHaveBeenCalledWith(['login']);
  });
});
