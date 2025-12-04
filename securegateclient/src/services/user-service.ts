import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/api/api-service";
import { UserDTORequest } from "../models/user/user";

export function getAllUsers(
  page: number,
  size = 10,
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/users/getAllUsers",
    params: {
      page,
      size,
    },
  };
  return requestBackend(config);
}


export function addUser(obj: UserDTORequest) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "http://localhost:8090/users/addUser",
    withCredentials: true,
    data: obj,
  };
  return requestBackend(config);
}