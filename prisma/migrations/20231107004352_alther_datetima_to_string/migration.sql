/*
  Warnings:

  - Changed the type of `tb_remedio_hora` on the `tb_remedios` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tb_remedios" DROP COLUMN "tb_remedio_hora",
ADD COLUMN     "tb_remedio_hora" VARCHAR(10) NOT NULL;
