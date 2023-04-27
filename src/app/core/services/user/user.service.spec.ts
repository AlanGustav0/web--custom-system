import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { TokenResponse } from '../interfaces/response/token-response.interface';
import { UserResponse } from '../interfaces/response/user-response.interface';

describe(UserService.name, () => {
  let userService: UserService;

  beforeEach(() => {
    userService = TestBed.inject(UserService);
  });

  it('should be created',() => {
    expect(userService).toBeTruthy();
  });

  it(`#${UserService.prototype.isLogged.name} should be return === false when it has been called`, () => {
    window.localStorage.removeItem('authToken');
    expect(userService.isLogged()).toBe(false);
  });

  it(`#${UserService.prototype.isLogged.name} should be return === true when it has been called`, () => {
    const userResponse:UserResponse = {
      userName: '',
      role: '',
      profileStyle: ''
    }
    const token: TokenResponse = {
      user: userResponse,
      token: ''
    }
    userService.setToken(token);
    expect(userService.isLogged()).toBe(true);
  });

  it(`#${UserService.prototype.getUser.name} should be return user when it has been called`, () => {
    const userResponse:UserResponse = {
      userName: 'Teste',
      role: '',
      profileStyle: ''
    }
    const token: TokenResponse = {
      user: userResponse,
      token: ''
    }
    userService.setToken(token);
    const getUserResponse = userService.getUser();
    expect(getUserResponse).not.toBeNull();
  });
});
