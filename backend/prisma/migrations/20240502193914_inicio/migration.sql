-- CreateTable
CREATE TABLE "funcionarios" (
    "id" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "data_de_nascimento" TIMESTAMP(3) NOT NULL,
    "contato" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionarios_funcoes" (
    "id" TEXT NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "id_funcao" TEXT NOT NULL,

    CONSTRAINT "funcionarios_funcoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcoes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Funcoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alunos" (
    "id" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "data_de_nascimento" TIMESTAMP(3) NOT NULL,
    "nome_pai_completo" TEXT,
    "nome_mae_completo" TEXT,
    "matriculado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disciplinas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "disciplinas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turmas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "turno" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "disciplina" TEXT NOT NULL,
    "id_funcionario" TEXT NOT NULL,
    "id_disciplina" TEXT NOT NULL,

    CONSTRAINT "turmas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alunos_turmas" (
    "id" TEXT NOT NULL,
    "id_aluno" TEXT NOT NULL,
    "id_turma" TEXT NOT NULL,

    CONSTRAINT "alunos_turmas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "presencas" (
    "id" TEXT NOT NULL,
    "id_aluno" TEXT NOT NULL,
    "id_turma" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "presente" BOOLEAN NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "presencas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notas" (
    "id" TEXT NOT NULL,
    "id_aluno" TEXT NOT NULL,
    "id_turma" TEXT NOT NULL,
    "bimestre" INTEGER NOT NULL,
    "av1" DOUBLE PRECISION,
    "av2" DOUBLE PRECISION,
    "av3" DOUBLE PRECISION,
    "media" DOUBLE PRECISION,
    "recuperacao" DOUBLE PRECISION,
    "media_final" DOUBLE PRECISION,
    "faltas" INTEGER,

    CONSTRAINT "notas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alunos_matricula_key" ON "alunos"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "alunos_turmas_id_aluno_id_turma_key" ON "alunos_turmas"("id_aluno", "id_turma");

-- AddForeignKey
ALTER TABLE "funcionarios_funcoes" ADD CONSTRAINT "funcionarios_funcoes_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "funcionarios_funcoes" ADD CONSTRAINT "funcionarios_funcoes_id_funcao_fkey" FOREIGN KEY ("id_funcao") REFERENCES "Funcoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turmas" ADD CONSTRAINT "turmas_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turmas" ADD CONSTRAINT "turmas_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "disciplinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alunos_turmas" ADD CONSTRAINT "alunos_turmas_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alunos_turmas" ADD CONSTRAINT "alunos_turmas_id_turma_fkey" FOREIGN KEY ("id_turma") REFERENCES "turmas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "presencas" ADD CONSTRAINT "presencas_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "presencas" ADD CONSTRAINT "presencas_id_turma_fkey" FOREIGN KEY ("id_turma") REFERENCES "turmas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas" ADD CONSTRAINT "notas_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas" ADD CONSTRAINT "notas_id_turma_fkey" FOREIGN KEY ("id_turma") REFERENCES "turmas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
