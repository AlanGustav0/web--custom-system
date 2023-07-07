import { SigninRequest } from '../services/interfaces/request/signin-request.interface';
import { TokenResponse } from '../services/interfaces/response/token-response.interface';
import { UserProfileResponse } from '../services/interfaces/response/user-profile-response.interface';
import { UserResponse } from '../services/interfaces/response/user-response.interface';

export class Login {
  static readonly type = '[Login] Autenticação do usuário';
  constructor(public request: SigninRequest) {}
}

export class LoginSuccess {
  static readonly type = '[Login Success] Usuário autenticado com sucesso';
  constructor(public response: TokenResponse) {}
}

export class LoginError {
  static readonly type = '[Login Error] Erro na autenticação';
}

export class Logout {
  static readonly type = '[Logout] Saindo do sistema';
}

export class LogoutSucess {
  static readonly type = '[Logout Sucess] Saindo do sistema com sucesso';
}

export class UpdateUser {
  static readonly type = '[Update User] Solicidata atualização de usuário';
  constructor(public request: number){}
}

export class UpdateUserSuccess {
  static readonly type = '[Update User] Usuário atualizado com sucesso';
  constructor(public response: UserResponse){}
}

export class UpdateUserError {
  static readonly type = '[Update User] Erro ao atualizar usuário';
}

export class UpdateUserProfile {
  static readonly type = '[Update User Profile] Solicidata atualização de perfil de usuário';
  constructor(public request: number){}
}

export class UpdateUserProfileSuccess {
  static readonly type = '[Update User Profile] Perfil de Usuário atualizado com sucesso';
  constructor(public response: UserProfileResponse){}
}

export class UpdateUserProfileError {
  static readonly type = '[Update User Profile] Erro ao atualizar perfil do usuário';
}


