import {User} from "./User";

export interface Appoinment {
  id: number;
  date: string;
  time: string;
  status?: string;
  user?: User;
}
