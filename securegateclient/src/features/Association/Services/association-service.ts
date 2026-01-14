import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../../../utils/api/api-service";
import { AssociationDTO } from "../models/association";

export function getTodosSistemas() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "http://192.168.18.84:8090/system/getAll",
  };
  return requestBackend(config);
}

export function getSistemaPerfis(id: number) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `http://192.168.18.84:8090/system/${id}/roles`
  };
  return requestBackend(config);
}

export function getUsuarioByParameters(text: string) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "http://192.168.18.84:8090/users/usuario",
    params: {
      text
    },
  };
  return requestBackend(config);
}

export function adicionarAssociation(obj: AssociationDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "http://192.168.18.84:8090/association",
    data: obj,
  };
  return requestBackend(config);
}