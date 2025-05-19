import { config } from "../config";
import { AxiosRequestConfig } from "axios";
export const { serverBaseUrl } = config;

export const requestConfig: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const getRequestConfig = (): AxiosRequestConfig => {
  return {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

// public route
export const authBaseUrl = `${serverBaseUrl}/auth`;
export const userRegisterUrl = `${authBaseUrl}/signup`;
export const userLoginUrl = `${authBaseUrl}/login`;

// protected route
export const protectedBaseUrl = `${serverBaseUrl}/api`;

// user
export const userBaseUrl = `${protectedBaseUrl}/user`;

// friend request
export const sendFriendRequestUrl = `${protectedBaseUrl}/friend-request`;
export const getAcceptFrientRequestUrl = (id: string) =>
  `${protectedBaseUrl}/friend-request/${id}/accept`;

// frienc
export const friendBaseUrl = `${protectedBaseUrl}/friends`;

// directMessage
export const directMessageUrlBaseUrl = `${protectedBaseUrl}/direct-message`;

// messages
export const getAllDmMessageUrl = `${protectedBaseUrl}/messages/direct-message`;
