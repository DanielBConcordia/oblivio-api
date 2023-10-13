-- CreateEnum
CREATE TYPE "Nivel" AS ENUM ('principal', 'secundario');

-- CreateEnum
CREATE TYPE "TipoSanguineo" AS ENUM ('A_POSITIVO', 'B_POSITIVO', 'AB_POSITIVO', 'O_POSITIVO', 'A_NEGATIVO', 'B_NEGATIVO', 'AB_NEGATIVO', 'O_NEGATIVO');

-- CreateTable
CREATE TABLE "SequelizeMeta" (
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "tb_alergias" (
    "id" SERIAL NOT NULL,
    "tb_alergia_desc" VARCHAR(255),

    CONSTRAINT "tb_alergias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_cuidadores" (
    "id" SERIAL NOT NULL,
    "tb_cuidador_cpf" CHAR(11) NOT NULL,
    "tb_cuidador_dt_nasc" TIMESTAMPTZ(6) NOT NULL,
    "tb_cuidador_email" VARCHAR(255) NOT NULL,
    "tb_cuidadr_tel" INTEGER NOT NULL,
    "tb_cuidador_tel_res" INTEGER,
    "tb_cuidador_nome_social" VARCHAR(255),
    "tb_cuidador_nome" VARCHAR(255) NOT NULL,
    "tb_cuidador_senha" VARCHAR(255) NOT NULL,
    "tb_cuidador_foto_perfil" BYTEA NOT NULL,
    "tb_cuidador_rua" VARCHAR(255) NOT NULL,
    "tb_cuidador_cep" CHAR(8) NOT NULL,
    "tb_cuidador_bairro" VARCHAR(255) NOT NULL,
    "tb_cuidador_numero_casa" INTEGER NOT NULL,
    "tb_cuidador_cidade" VARCHAR(255) NOT NULL,
    "tb_cuidador_uf" CHAR(2) NOT NULL,
    "tb_cuidador_complemento" VARCHAR(255),
    "tb_cuidador_ponto_referencia" VARCHAR(255),
    "nivel" "Nivel" NOT NULL,

    CONSTRAINT "tb_cuidadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_pacientes" (
    "id" SERIAL NOT NULL,
    "tb_paciente_cpf" CHAR(11) NOT NULL,
    "tb_paciente_nome" VARCHAR(255) NOT NULL,
    "tb_paciente_dt_nasc" TIMESTAMPTZ(6) NOT NULL,
    "tb_paciente_condicao" VARCHAR(255) NOT NULL,
    "tb_paciente_responsavel_legal" VARCHAR(255) NOT NULL,
    "tipoSanguineo" "TipoSanguineo" NOT NULL,
    "tb_paciente_temperamento" VARCHAR(255) NOT NULL,
    "tb_paciente_interacao" VARCHAR(255) NOT NULL,
    "tb_paciente_foto" BYTEA NOT NULL,
    "tb_paciente_fk_cuidador" INTEGER NOT NULL,
    "tb_paciente_fk_remedio" INTEGER,
    "tb_paciente_fk_alergia" INTEGER,

    CONSTRAINT "tb_pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_pulseira_scan" (
    "id" SERIAL NOT NULL,
    "tb_pulseira_scan_fk_cuidador" INTEGER NOT NULL,
    "tb_pulseira_scan_fk_paciente" INTEGER NOT NULL,
    "tb_pulseira_scan_local" VARCHAR(255),

    CONSTRAINT "tb_pulseira_scan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_remedios" (
    "id" SERIAL NOT NULL,
    "tb_remedio_desc" VARCHAR(255) NOT NULL,
    "tb_remedio_qtd" VARCHAR(255) NOT NULL,
    "tb_remedio_hora" TIME(6) NOT NULL,

    CONSTRAINT "tb_remedios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_cuidadores_tb_cuidador_email_key" ON "tb_cuidadores"("tb_cuidador_email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_cuidadores_tb_cuidadr_tel_key" ON "tb_cuidadores"("tb_cuidadr_tel");

-- CreateIndex
CREATE UNIQUE INDEX "tb_cuidadores_tb_cuidador_tel_res_key" ON "tb_cuidadores"("tb_cuidador_tel_res");

-- AddForeignKey
ALTER TABLE "tb_pacientes" ADD CONSTRAINT "tb_pacientes_tb_paciente_fk_alergia_fkey" FOREIGN KEY ("tb_paciente_fk_alergia") REFERENCES "tb_alergias"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_pacientes" ADD CONSTRAINT "tb_pacientes_tb_paciente_fk_cuidador_fkey" FOREIGN KEY ("tb_paciente_fk_cuidador") REFERENCES "tb_cuidadores"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_pacientes" ADD CONSTRAINT "tb_pacientes_tb_paciente_fk_remedio_fkey" FOREIGN KEY ("tb_paciente_fk_remedio") REFERENCES "tb_remedios"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_pulseira_scan" ADD CONSTRAINT "tb_pulseira_scan_tb_pulseira_scan_fk_cuidador_fkey" FOREIGN KEY ("tb_pulseira_scan_fk_cuidador") REFERENCES "tb_cuidadores"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_pulseira_scan" ADD CONSTRAINT "tb_pulseira_scan_tb_pulseira_scan_fk_paciente_fkey" FOREIGN KEY ("tb_pulseira_scan_fk_paciente") REFERENCES "tb_pacientes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
