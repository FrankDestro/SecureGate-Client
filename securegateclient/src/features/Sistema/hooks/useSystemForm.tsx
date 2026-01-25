import { useState } from "react";
import { SystemRequest } from "../models/systems";
import { toast } from "react-toastify";
import * as systemService from "../services/system-service";

export function useSystemForm() {

    const [isLoading, setIsLoading] = useState(false);

    async function save(system: SystemRequest, isCreating: boolean) {
        setIsLoading(true);
        try {
            if (isCreating) {
                await systemService.addAuthClient(system);
                toast.success("Sistema cadastrado com sucesso!");
            } else {
                await systemService.UpdateAuthClient(system);
                toast.success("Sistema atualizado com sucesso!");
            }
            return true;
        } catch {
            toast.error("Erro ao salvar sistema.");
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    return { save, isLoading };
}

