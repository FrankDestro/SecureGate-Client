import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/api-service";

export function getAllSystems(
    page: number,
    size = 10,
  ) {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/system/getAllSystem",
      params: {
        page,
        size,
      },
    };
    return requestBackend(config);
  }
