export enum Status {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

export interface Appointment {
  id: number;
  date: string;
  time: string;
  status: Status;
  user: number;
}
