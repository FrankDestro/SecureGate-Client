import { faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { Search } from 'lucide-react';
import { useState } from 'react';
import Button from '../../../../components/ui/Button/Button';
import CustomInput from '../../../../components/ui/InputCustom/CustomInput';
import "./FilterBarSystem.css";

type Props = {
    onSearch: (
        searchTerm: string,
    ) => void;
};

function FilterBarSystem({ onSearch }: Props) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        onSearch(
            searchTerm,
        );
    }

    function handleClearFilters(): void {
        setSearchTerm("");
        onSearch(
            "",
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='container-search-system'>
                <CustomInput
                    icon={<Search size={18} />}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    width="50%"
                    height="45px"
                    label="Digite o codigo / nome do sistema"
                />
                <div className='container-search-system-buttons'>
                    <Button
                        text="Buscar"
                        icon={faSearch}
                        background="#009688"
                        hoverColor="#00796b"
                        borderRadius="5px"
                        height="45px"
                        type='submit'
                    />
                    <Button
                        text="Limpar"
                        icon={faX}
                        background="#009688"
                        hoverColor="#00796b"
                        borderRadius="5px"
                        height="45px"
                        onClick={handleClearFilters}
                    />
                </div>
            </div>
        </form>
    )
}

export default FilterBarSystem
