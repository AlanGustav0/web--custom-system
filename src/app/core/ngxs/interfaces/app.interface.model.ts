import { UserResponse } from "../../services/interfaces/response/user-response.interface";

export interface AppStateModel{
  userLogged:boolean;
  user?:UserResponse;
  loading:boolean;
  error:boolean;
}
