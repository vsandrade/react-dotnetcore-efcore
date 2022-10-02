import { IAtividade } from './atividade';

export interface AtividadeItemProps {
    ativ: IAtividade;
    pegarAtividade: (id: number) => void;
    handleConfirmModal: (id: number) => void;
}

export interface AtividadeListaProps {
    atividades: IAtividade[];
    pegarAtividade: (id: number) => void;
    handleConfirmModal: (id: number) => void;
}

export interface AtividadeFormProps {
    ativSelecionada: IAtividade;
    atualizarAtividade: (atividade: IAtividade) => void;
    addAtividade: (atividade: IAtividade) => void;
    cancelarAtividade: () => void;
}