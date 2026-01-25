import { useState } from "react";
import { UserRequest } from "../models/user";

export function useUserForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function save(user: UserRequest, isCreating: boolean): Promise<boolean> {
    try {
      setIsLoading(true);

      if (isCreating) {
        console.log("Criando usuário", user);
        // await userService.create(user);
      } else {
        console.log("Atualizando usuário", user);
        // await userService.update(user);
      }

      return true;
    } catch (error) {
      console.error("Erro ao salvar usuário", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    save,
    isLoading,
  };
}
