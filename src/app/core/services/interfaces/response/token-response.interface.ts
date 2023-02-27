import { UserResponse } from "./user-response.interface";

export interface TokenResponse {
  user:UserResponse;
  token:string;
}
