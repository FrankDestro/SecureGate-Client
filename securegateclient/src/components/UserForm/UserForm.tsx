import { useState, useEffect } from "react";
import "./UserForm.css";

interface UserFormProps {
  user: any;
  onCancel: () => void;
  onSave: (user: any) => void;
}

function UserForm({ user, onCancel, onSave }: UserFormProps) {
  const [formData, setFormData] = useState<any>(user);

  // Atualiza os dados do formulário sempre que o usuário for alterado
  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData); // Chama a função de salvar passando os dados do formulário
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite o nome"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Digite o username"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite o email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ativo">Ativo</label>
        <select
          id="ativo"
          name="ativo"
          value={formData.ativo}
          onChange={handleChange}
        >
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
      </div>
    </form>
  );
}

export default UserForm;
