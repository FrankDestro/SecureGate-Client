import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import './AntDataInput.css';
import ptBR from 'antd/es/date-picker/locale/pt_BR';

interface AntDateInputProps {
    label: string;
    width?: string;
    height?: string;
    value?: Dayjs | null;
    placeholder? : string,
    onChange?: (date: Dayjs | null, dateString: string) => void;
}

const AntDateInput: React.FC<AntDateInputProps> = ({
    label,
    width = '300px',
    height = '50px',
    value,
    placeholder,
    onChange,
}) => {
    const handleChange = (
        date: Dayjs | null,
        dateString: string | string[]
    ) => {
        if (onChange) {
            onChange(date, Array.isArray(dateString) ? dateString[0] : dateString);
        }
    };

    return (
        <div className="ant-date-input-container" style={{ width, height }}>
            <label className="ant-date-label">{label}</label>

            <DatePicker
                className="ant-date-input"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                locale={ptBR}
                format="DD/MM/YYYY"

            />
        </div>
    );
};

export default AntDateInput;
