import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/api/api-service";
import { SystemRequest } from "../models/system/systems";

export function getAllSystems(
    page: number,
    size = 10,
    nome: string,
  ) {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "http://192.168.18.84:8083/api/system/getAllSystem",
      params: {
        page,
        size,
        nome
      },
    };
    return requestBackend(config);
  }

export function addAuthClient(obj: SystemRequest) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "http://192.168.18.84:8083/api/system/cadastrar",
    withCredentials: true,
    data: obj,
  };
  return requestBackend(config);
}

export function UpdateAuthClient(obj: SystemRequest) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `http://192.168.18.84:8083/api/system/atualizar/${obj.id}`,
    withCredentials: true,
    data: obj
  }
  return requestBackend(config);
}
