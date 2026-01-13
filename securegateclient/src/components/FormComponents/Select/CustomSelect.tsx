import React from 'react';
import { Select } from 'antd';

type OptionType = {
  value: string | number;
  label: React.ReactNode;
};

type CustomSelectProps = {
  options: any;
  placeholder?: string;
  onChange?: (value: string | number) => void;
  onSearch?: (value: string) => void;
  style?: React.CSSProperties;
  allowClear?: boolean;
  value?: string | number;
  disabled?: boolean;
  mode?: 'multiple' | 'tags' | undefined;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = 'Selecione',
  onChange,
  onSearch,
  style,
  allowClear = true,
  value,
  disabled = false,
  mode,
}) => {
  return (
    <Select
      showSearch
      placeholder={placeholder}
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase())
      }
      options={options}
      style={style}
      allowClear={allowClear}
      value={value}
      disabled={disabled}
      mode={mode}
      // Você pode adicionar outras props que precise aqui
    />
  );
};

export default CustomSelect;
