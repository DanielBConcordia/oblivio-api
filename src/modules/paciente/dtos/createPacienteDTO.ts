export interface CreatePacienteDTO {
  cpf: string;
  nome: string;
  dtNascimento: string;
  condicao: string;
  responsavelLegal: string;
  tipoSanguineo: "A_POSITIVO" | "B_POSITIVO" | "AB_POSITIVO" | "O_POSITIVO" | "A_NEGATIVO" | "B_NEGATIVO" | "AB_NEGATIVO" | "O_NEGATIVO";
  temperamento: string;
  interacao: string;
  fotoPerfil: Buffer;
  tb_paciente_fk_cuidador: number;
}

