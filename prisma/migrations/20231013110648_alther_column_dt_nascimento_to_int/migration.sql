/*
  Warnings:

  - Changed the type of `tb_cuidador_dt_nasc` on the `tb_cuidadores` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tb_cuidadores" DROP COLUMN "tb_cuidador_dt_nasc",
ADD COLUMN     "tb_cuidador_dt_nasc" INTEGER NOT NULL;
