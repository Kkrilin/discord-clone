export enum MonthType {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

export interface RegisterUserPayload {
  dateOfBirth: string;
  userName: string;
  displayName?: string;
  password: string;
  email: string;
}

export enum StatusEnum {
  Online = "online",
  Invisible = "invisible",
  Idle = "idle",
  DoNotDisturb = "dnd",
}

export type Size = {
  width: string;
  height: string;
};
