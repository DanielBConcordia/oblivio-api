/*
  Warnings:

  - Changed the type of `tb_paciente_dt_nasc` on the `tb_pacientes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tb_pacientes" DROP COLUMN "tb_paciente_dt_nasc",
ADD COLUMN     "tb_paciente_dt_nasc" CHAR(8) NOT NULL;
