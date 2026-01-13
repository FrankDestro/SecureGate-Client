import React, { useState } from 'react';
import { Checkbox, Button, Space } from 'antd';

type Role = {
  id: string | number;
  title: string;
  description: string;
};

type RolesSelectorProps = {
  roles: Role[];
  selectedRoles: (string | number)[];
  onChange: (selected: (string | number)[]) => void;
  disabled?: boolean;
};

const RolesSelector: React.FC<RolesSelectorProps> = ({
  roles,
  selectedRoles,
  onChange,
  disabled = false,
}) => {
  const onCheckAll = () => {
    onChange(roles.map((r) => r.id));
  };

  const onUncheckAll = () => {
    onChange([]);
  };

  const onCheckChange = (checkedValues: (string | number)[]) => {
    onChange(checkedValues);
  };

  return (
    <div>
      <h3>Perfis Disponíveis</h3>
      <p>Selecione os perfis para o sistema escolhido:</p>
      <Space style={{ marginBottom: 16 }}>
        <Button type="link" onClick={onCheckAll} disabled={disabled}>
          Selecionar Todos
        </Button>
        <Button type="link" onClick={onUncheckAll} disabled={disabled}>
          Desmarcar Todos
        </Button>
      </Space>
      <Checkbox.Group
        disabled={disabled}
        value={selectedRoles}
        onChange={onCheckChange}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          border: '1px solid #d9d9d9',
          padding: 12,
          borderRadius: 4,
          background: '#fff',
        }}
      >
        {roles.map(({ id, title, description }) => (
          <Checkbox key={id} value={id} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ fontWeight: 'bold', marginRight: 8 }}>{title}</div>
            <div style={{ color: '#888', fontSize: 14 }}>{description}</div>
          </Checkbox>
        ))}
      </Checkbox.Group>
    </div>
  );
};

export default RolesSelector;
