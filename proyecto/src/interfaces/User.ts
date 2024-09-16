import {Appoinment} from "./Appoinment";

export interface User {
  id?: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  profile_pic: string;
  credentials: number;
  appointments?: Appoinment[];
}
