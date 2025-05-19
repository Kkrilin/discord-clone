import {
  Messages,
  ReduceedMessage,
} from "../components/DirectMessage/DirectMessage";
import { DateOfBirth } from "../components/pages/RegisterPage";
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

export const mergeMessagesWithDateAndTime = (messages: Messages[]) => {
  return messages.reduce((acc: ReduceedMessage[], cur: Messages) => {
    const date = new Date(cur.createdAt)
      .toLocaleString("en-GB", { timeZone: "UTC" })
      .split(",")[0];
    const time = new Date(cur.createdAt).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    // const second = Math.floor((new Date(cur.createdAt)) / 1000);
    const message = {
      userName: cur.userName,
      date,
      time,
      timeStamp: new Date(cur.createdAt),
      // second,
      contents: [cur.content],
    };
    if (acc[acc.length - 1]) {
      const previousValue = acc[acc.length - 1];
      if (
        previousValue.userName === cur.userName &&
        previousValue.date === date &&
        previousValue.time == time
      ) {
        previousValue.contents.push(cur.content);
      } else {
        acc.push(message);
      }
    } else {
      acc.push(message);
    }
    return acc;
  }, []);
};
