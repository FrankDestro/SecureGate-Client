import { Monitor, X } from 'lucide-react';
import "./Modal.css";

type ModalProps = {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    icon?: React.ReactNode
};

const Modal: React.FC<ModalProps> = ({
    title,
    isOpen,
    onClose,
    children,
    icon
}) => {
    if (!isOpen) return null;

    return (
        <div className="system-modal-overlay">
            <div className="system-modal">
                {/* HEADER */}
                <header className="system-modal-header">
                    <div className="header-left">
                        {icon ?? <Monitor size={18} />}
                        <h3>{title}</h3>
                    </div>
                    <button className="close-button" onClick={onClose}>
                        <X size={18} />
                    </button>
                </header>
                {/* CONTEÚDO */}
                <section>
                    {children}
                </section>
            </div>
        </div>
    )
}

export default Modal
