/*
  Warnings:

  - You are about to drop the column `tb_paciente_fk_alergia` on the `tb_pacientes` table. All the data in the column will be lost.
  - You are about to drop the column `tb_paciente_fk_remedio` on the `tb_pacientes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tb_pacientes" DROP CONSTRAINT "tb_pacientes_tb_paciente_fk_alergia_fkey";

-- DropForeignKey
ALTER TABLE "tb_pacientes" DROP CONSTRAINT "tb_pacientes_tb_paciente_fk_remedio_fkey";

-- AlterTable
ALTER TABLE "tb_alergias" ADD COLUMN     "tb_alergia_fk_paciente" INTEGER;

-- AlterTable
ALTER TABLE "tb_pacientes" DROP COLUMN "tb_paciente_fk_alergia",
DROP COLUMN "tb_paciente_fk_remedio";

-- AlterTable
ALTER TABLE "tb_remedios" ADD COLUMN     "tb_remedio_fk_paciente" INTEGER;

-- AddForeignKey
ALTER TABLE "tb_alergias" ADD CONSTRAINT "tb_alergias_tb_alergia_fk_paciente_fkey" FOREIGN KEY ("tb_alergia_fk_paciente") REFERENCES "tb_pacientes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_remedios" ADD CONSTRAINT "tb_remedios_tb_remedio_fk_paciente_fkey" FOREIGN KEY ("tb_remedio_fk_paciente") REFERENCES "tb_pacientes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
