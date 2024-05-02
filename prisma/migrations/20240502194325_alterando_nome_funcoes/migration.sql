/*
  Warnings:

  - You are about to drop the `Funcoes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "funcionarios_funcoes" DROP CONSTRAINT "funcionarios_funcoes_id_funcao_fkey";

-- DropTable
DROP TABLE "Funcoes";

-- CreateTable
CREATE TABLE "funcoes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "funcoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "funcionarios_funcoes" ADD CONSTRAINT "funcionarios_funcoes_id_funcao_fkey" FOREIGN KEY ("id_funcao") REFERENCES "funcoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
