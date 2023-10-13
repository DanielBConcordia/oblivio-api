export interface CreateCuidadorDTO {
    cpf: string;
    dtNascimento: number;
    email: string;
    telefone: number;
    telefoneReserva: number;
    nomeSocial: string;
    nome: string;
    senha: string;
    fotoPerfil: Buffer;
    rua: string;
    cep: string;
    bairro: string;
    numeroCasa: number;
    cidade: string;
    uf: string;
    complementoCasa: string;
    pontoReferencia: string;
}