export interface CreateCuidadorDTO {
    cpf: string;
    dtNascimento: string;
    email: string;
    telefone: string;
    telefoneReserva: string;
    nomeSocial: string;
    nome: string;
    senha: string;
    fotoPerfil: Buffer;
    rua: string;
    cep: string;
    bairro: string;
    numeroCasa: string;
    cidade: string;
    uf: string;
    complementoCasa: string;
    pontoReferencia: string;
}