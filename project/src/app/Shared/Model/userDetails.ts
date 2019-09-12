import { ILogin } from './userLogin';
export interface UserDetails {
   FirstName: string;
   LastName: string;
   MobileNo: string;
   EmailId: string;
   Address: string;
   UserLogin: ILogin;
}