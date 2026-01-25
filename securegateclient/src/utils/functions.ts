import { systemDTO, SystemRequest } from "../features/Sistema/models/systems";
import { UserRequest } from "../features/Usuario/models/user";

export function toSystemRequest(formData: any): SystemRequest {
  const data: any = {};
  data.id = formData.id?.id,
    data.code = formData.code;
  data.name = formData.name;
  data.description = formData.description;
  data.clientId = formData.clientId;
  data.clientSecretHash = formData.clientSecretHash;
  data.active = formData.active;
  return data;
}


export function createEmptyUser(): UserRequest {
  return {
    name: "",
    email: "",
    enabled: false
  };
}

export function createEmptySystem(): systemDTO {
  return {
    id: 0,
    name: "",
    code: "",
    description: "",
    clientId: "",
    clientSecretHash: "",
    createdAt: "",
    createdBy: "",
    updatedAt: "",
    updatedBy: "",
    active: ""
  };
}
