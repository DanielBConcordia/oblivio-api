-- AlterTable
ALTER TABLE "tb_cuidadores" ALTER COLUMN "tb_cuidador_cpf" SET DATA TYPE CHAR(14),
ALTER COLUMN "tb_cuidador_dt_nasc" SET DATA TYPE CHAR(10);

-- AlterTable
ALTER TABLE "tb_pacientes" ALTER COLUMN "tb_paciente_cpf" SET DATA TYPE CHAR(14),
ALTER COLUMN "tb_paciente_dt_nasc" SET DATA TYPE CHAR(10);
