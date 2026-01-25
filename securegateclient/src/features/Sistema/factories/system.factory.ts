// export function createEmptySystem(): systemDTO {
//   return {
//     id: 0,
//     name: "",
//     code: "",
//     description: "",
//     clientId: "",
//     clientSecretHash: "",
//     createdAt: "",
//     createdBy: "",
//     updatedAt: "",
//     updatedBy: "",
//     active: ""
//   };
// }


export function createEmptySystem() {
  return {
    id: "",
    nome: "",
    clientId: "",
    clientSecret: "",
    descricao: "",
    ativo: false,
    dataRegistro: "",
    dataAtualizacao: "",
    roles: [],
    permissions: [],
  };
}