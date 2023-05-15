import { SigninRequest } from "../services/interfaces/request/signin-request.interface";
import { TokenResponse } from "../services/interfaces/response/token-response.interface";

export class Login {
  static readonly type = '[Login] Autenticação do usuário';
  constructor(public request:SigninRequest){}
}

export class LoginSuccess {
  static readonly type = '[Login Success] Usuário autenticado com sucesso';
  constructor(public response:TokenResponse){}
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

