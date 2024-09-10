import {Appoinment} from "./Appoinment";
import {Credentials} from "./Credentials";

export interface User {
  id?: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  profile_pic: string;
  credentials: Credentials;
  appointments?: Appoinment[];
}
