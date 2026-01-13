import { useEffect, useState } from "react";
import * as associationService from "../Services/association-service";
import { UsuarioDTO } from "../models/association";

function useUsuario(searchTerm: string) {
    const [usuario, setUsuario] = useState<UsuarioDTO | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if ((!searchTerm || searchTerm.trim() === "")) {
            setUsuario(null);
            setError("É necessário informar o parametro para buscar um usuário");
            return;
        }

        setError(null);
        setIsLoading(true);
        associationService.getUsuarioByParameters(searchTerm ?? "")
            .then((response) =>
                setUsuario(response.data))
            .catch(() =>
                setError("Erro ao buscar usuário."))
            .finally(() =>
                setIsLoading(false));
    }, [searchTerm]);

    return { usuario, isLoading, error };
}

export default useUsuario;