import { config } from "../config";
import { AxiosRequestConfig } from "axios";
export const { serverBaseUrl } = config;

export const requestConfig: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getRequestConfig = (): AxiosRequestConfig => {
  return {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
export const authBaseUrl = `${serverBaseUrl}/auth`;
export const userRegisterUrl = `${authBaseUrl}/signup`;
export const userLoginUrl = `${authBaseUrl}/login`;
