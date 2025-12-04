import { SystemRequest } from "../models/system/systems";

export function toSystemRequest(formData: any): SystemRequest {
    const data: any = {};
    data.id = formData.id?.id, // id do sistema existente
    data.code = formData.code;
    data.name = formData.name;
    data.description = formData.description;
    data.clientId = formData.clientId;
    data.clientSecretHash = formData.clientSecretHash;
    data.active = formData.active;
    return data;
}