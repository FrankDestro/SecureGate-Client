import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/api/api-service";

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
