import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/api-service";

export function getAllUsers(
    page: number,
    size = 10,
  ) {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/user/getAll",
      params: {
        page,
        size,
      },
    };
    return requestBackend(config);
  }
