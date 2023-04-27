import { TestBed } from '@angular/core/testing';

import { SignupService } from './sigunp.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SignupRequest } from '../interfaces/request/signup-request.interface';

describe(SignupService.name, () => {
  let service: SignupService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${SignupService.prototype.signup.name} should be call (POST) method when it has been called`, () => {
    const request: SignupRequest = {
      userName: 'user',
      password: 'password',
    };
    service
      .signup(request)
      .subscribe((data) => expect(data).not.toBeNull);

    const req = httpTestingController.expectOne('http://localhost:5038/usuario/cadastrar');
    expect(req.request.method).toEqual('POST');
    req.flush(request);
    httpTestingController.verify();
  });
});
