import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../system/system";

export function requestBackend(config: AxiosRequestConfig) {
    return axios({ ...config, baseURL: BASE_URL });
  }
  
//   export function requestBackendConfig(config: AxiosRequestConfig) {
//     config.headers = {
//       ...(config.headers || {}),
//       Authorization: "Bearer " + authService.getAccessToken(),
//     };
//     return axios({ ...config, baseURL: BASE_URL, headers: config.headers });
//   }