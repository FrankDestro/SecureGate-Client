import React, { useState } from "react";
import Tree from "rc-tree";
import "rc-tree/assets/index.css";

// ----------------------
// MOCK DE SISTEMAS
// ----------------------
const systemsData = [
  {
    title: "Sistema Financeiro",
    key: "financeiro",
    children: [
      { title: "Admin", key: "financeiro-admin" },
      { title: "Contas a Pagar", key: "financeiro-pagar" },
      { title: "Consulta", key: "financeiro-consulta" }
    ]
  },
  {
    title: "Sistema de RH",
    key: "rh",
    children: [
      { title: "Admin", key: "rh-admin" },
      { title: "Folha de Pagamento", key: "rh-folha" },
      { title: "Ponto Eletrônico", key: "rh-ponto" }
    ]
  },
  {
    title: "Sistema CRM",
    key: "crm",
    children: [
      { title: "Admin", key: "crm-admin" },
      { title: "Consulta", key: "crm-consulta" }
    ]
  }
];

// ----------------------
// COMPONENTE PRINCIPAL
// ----------------------
export default function UserSystemAssociation() {
  // Perfis já associados ao usuário (API)
  const [associated, setAssociated] = useState([
    "financeiro-admin",
    "financeiro-consulta",
    "rh-admin"
  ]);

  // Perfis novos selecionados
  const [newSelected, setNewSelected] = useState([]);

  // Perfis marcados no lado esquerdo (para remover)
  const [leftChecked, setLeftChecked] = useState([]);

  // ------------------------------------
  // 1. Tree da Direita (Disponíveis)
  // ------------------------------------
  const availableSystems = systemsData
    .map((system) => {
      const filteredChildren = system.children.filter(
        (role) =>
          !associated.includes(role.key) &&
          !newSelected.includes(role.key)
      );

      if (filteredChildren.length === 0) return null;

      return { ...system, children: filteredChildren };
    })
    .filter(Boolean);

  // ------------------------------------
  // 2. Tree da Esquerda (Associados + Novos)
  // ------------------------------------
  const finalTree = systemsData
    .map((system) => {
      const filteredChildren = system.children
        .filter(
          (role) =>
            associated.includes(role.key) ||
            newSelected.includes(role.key)
        )
        .map((role) => ({
          ...role,
          title: (
            <span
              style={{
                color: associated.includes(role.key)
                  ? "green"
                  : "#006d77",
                fontWeight: "bold"
              }}
            >
              {role.title}
              {newSelected.includes(role.key) && (
                <span style={{ marginLeft: 6, fontSize: 12 }}>
                  (novo)
                </span>
              )}
            </span>
          )
        }));

      if (filteredChildren.length === 0) return null;

      return { ...system, children: filteredChildren };
    })
    .filter(Boolean);

  // ------------------------------------
  // Função para REMOVER itens pelo lado esquerdo
  // ------------------------------------
  const handleRemove = () => {
    const updatedAssociated = associated.filter(
      (key) => !leftChecked.includes(key)
    );

    const updatedNewSelected = newSelected.filter(
      (key) => !leftChecked.includes(key)
    );

    setAssociated(updatedAssociated);
    setNewSelected(updatedNewSelected);
    setLeftChecked([]); // limpa seleção
  };

  // ------------------------------------
  // Renderização
  // ------------------------------------
  return (
    <div
      style={{
        display: "flex",
        gap: 30,
        padding: 20,
        width: "100%",
        justifyContent: "center"
      }}
    >
      {/* --------------------------------------- */}
      {/* LADO ESQUERDO - ASSOCIADOS + NOVOS */}
      {/* --------------------------------------- */}
      <div>
        <h3>Associados ao Usuário</h3>
        <div
          style={{
            width: 350,
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 10,
            background: "#fafafa"
          }}
        >
          <Tree
            checkable
            defaultExpandAll
            selectable={false}
            checkStrictly
            treeData={finalTree}
            checkedKeys={leftChecked}
            onCheck={(keys) => setLeftChecked(keys.checked)}
          />
        </div>

        <button
          onClick={handleRemove}
          style={{
            marginTop: 10,
            padding: "6px 12px",
            background: "#b00020",
            color: "#fff",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            width: 350
          }}
        >
          Remover Selecionados
        </button>
      </div>

      {/* --------------------------------------- */}
      {/* LADO DIREITO - DISPONÍVEIS */}
      {/* --------------------------------------- */}
      <div>
        <h3>Disponíveis para Associação</h3>
        <div
          style={{
            width: 350,
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 10,
            background: "#fff"
          }}
        >
          <Tree
            checkable
            defaultExpandAll
            selectable={false}
            checkStrictly
            treeData={availableSystems}
            checkedKeys={newSelected}
            onCheck={(keys) => setNewSelected(keys.checked)}
          />
        </div>
      </div>
    </div>
  );
}
