import { UserResponse } from '../interfaces/response/user-response.interface';
import { TokenResponse } from './../interfaces/response/token-response.interface';
import { TokenService } from "./token.service";
import { TestBed } from "@angular/core/testing";

describe(TokenService.name,() => {
  let tokenService:TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    tokenService = TestBed.inject(TokenService);
  });

  it('should be created',() => {
    expect(tokenService).toBeTruthy();
  });

  it(`#${TokenService.prototype.hasToken.name} should be === false when it is not has authToken`,() => {
    window.localStorage.removeItem('authToken')
    expect(tokenService.hasToken()).toBe(false);
  });

  it(`#${TokenService.prototype.hasToken.name} should be === true when it is has authToken`,() => {
    const userResponse:UserResponse = {
      userName: '',
      role: '',
      profileStyle: ''
    }
    const token: TokenResponse = {
      user: userResponse,
      token: ''
    }
    window.localStorage.setItem('authToken',JSON.stringify(token));
    expect(tokenService.hasToken()).toBe(true);
  });
});
