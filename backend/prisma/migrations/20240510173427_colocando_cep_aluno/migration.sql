/*
  Warnings:

  - Added the required column `cep` to the `alunos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alunos" ADD COLUMN     "cep" TEXT NOT NULL;
