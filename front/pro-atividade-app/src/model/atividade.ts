export enum Prioridade {
    NaoDefinido = 'NaoDefinido',
    Baixa = 'Baixa',
    Normal = 'Normal',
    Alta = 'Alta'
}

export interface IAtividade {
    id: number;
    prioridade: Prioridade;
    titulo: string;
    descricao: string;
}
