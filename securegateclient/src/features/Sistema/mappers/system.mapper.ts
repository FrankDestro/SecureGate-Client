import { SystemRequest } from "../models/systems";

export function toSystemRequest(formData: any): SystemRequest {
  return {
    id: formData.id?.id ?? null,
    code: formData.code,
    name: formData.name,
    description: formData.description,
    clientId: formData.clientId,
    clientSecretHash: formData.clientSecretHash,
    active: formData.active,
  };
}