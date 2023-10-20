/*
  Warnings:

  - You are about to alter the column `tb_cuidador_senha` on the `tb_cuidadores` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(64)`.
  - You are about to alter the column `tb_cuidador_numero_casa` on the `tb_cuidadores` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `VarChar(6)`.
  - You are about to alter the column `tb_cuidador_complemento` on the `tb_cuidadores` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(12)`.
  - You are about to alter the column `tb_cuidador_dt_nasc` on the `tb_cuidadores` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Char(8)`.

*/
-- AlterTable
ALTER TABLE "tb_cuidadores" ALTER COLUMN "tb_cuidadr_tel" SET DATA TYPE CHAR(11),
ALTER COLUMN "tb_cuidador_tel_res" SET DATA TYPE CHAR(11),
ALTER COLUMN "tb_cuidador_senha" SET DATA TYPE VARCHAR(64),
ALTER COLUMN "tb_cuidador_numero_casa" SET DATA TYPE VARCHAR(6),
ALTER COLUMN "tb_cuidador_complemento" SET DATA TYPE VARCHAR(12),
ALTER COLUMN "tb_cuidador_dt_nasc" SET DATA TYPE CHAR(8);
