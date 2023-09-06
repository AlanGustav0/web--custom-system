import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SigninRequest } from '../interfaces/request/signin-request.interface';

describe(AuthService.name, () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call (POST) method when it has been called', () => {
    const request: SigninRequest = {
      userName: 'user',
      password: 'password',
    };
    service
      .auth(request)
      .subscribe((data) => expect(data).not.toBeNull);

    const req = httpTestingController.expectOne('http://localhost:5038/login');
    expect(req.request.method).toEqual('POST');
    req.flush(request);
    httpTestingController.verify();
  });
});
