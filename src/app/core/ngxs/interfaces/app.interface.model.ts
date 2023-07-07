import { UserProfileResponse } from "../../services/interfaces/response/user-profile-response.interface";
import { UserResponse } from "../../services/interfaces/response/user-response.interface";

export interface AppStateModel{
  userLogged?:boolean;
  user?:UserResponse;
  userProfile?:UserProfileResponse;
  loading:boolean;
  error:boolean;
}
