export type SistemaDTO = {
    id: string;
    code: string
    name: string
}

export type SistemaRolesDTO = {
    id: string;
    authority: string
}

export type UsuarioDTO = {
    id: number,
    name: string,
    email: string,
    sistemas: SitemasDTO[];
}

export type SitemasDTO = {
    systemId: number,
    systemCode: string
    systemName: string
    permissions: PerfisDTO[]
}

export type PerfisDTO = {
    roleId: number,
    roleName: string,
}