import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/api/api-service";

export function getAllSystems(
    page: number,
    size = 10,
    nome: string,
  ) {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/system/getAllSystem",
      params: {
        page,
        size,
        nome
      },
    };
    return requestBackend(config);
  }
