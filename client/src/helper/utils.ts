import { DateOfBirth } from "../pages/RegisterPage";
import { RegisterUserPayload } from "./type";

export const validatePayload = (
  payload: RegisterUserPayload,
  dobObj: DateOfBirth
) => {
  if (!dobObj.year) {
    throw new Error("birth year required");
  }
  if (!dobObj.month) {
    throw new Error("birth month required");
  }
  if (!dobObj.day) {
    throw new Error("birth date required");
  }
  if (new Date().getFullYear() - dobObj.year < 13) {
    throw new Error(
      `age should be greater than 13 but found : ${
        new Date().getFullYear() - dobObj.year
      }`
    );
  }
  if (!payload.email) {
    throw new Error("email is mandatory");
  }
  if (!payload.userName) {
    throw new Error("userName is mandatory");
  }
  if (!payload.password) {
    throw new Error("password is mandatrou");
  }
  if (payload.password && payload.password.length < 6) {
    throw new Error("password lenght is less than 6");
  }
  return true;
};
