-- CreateTable
CREATE TABLE "tb_caregiverpac" (
    "id" SERIAL NOT NULL,
    "tb_caregiverpac_fk_paciente" INTEGER NOT NULL,
    "tb_caregiverpac_fk_cuidador" INTEGER NOT NULL,

    CONSTRAINT "tb_caregiverpac_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_caregiverpac" ADD CONSTRAINT "tb_caregiverpac_tb_caregiverpac_fk_paciente_fkey" FOREIGN KEY ("tb_caregiverpac_fk_paciente") REFERENCES "tb_pacientes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_caregiverpac" ADD CONSTRAINT "tb_caregiverpac_tb_caregiverpac_fk_cuidador_fkey" FOREIGN KEY ("tb_caregiverpac_fk_cuidador") REFERENCES "tb_cuidadores"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
