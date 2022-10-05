-- CreateTable
CREATE TABLE "Morador" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "sobrenome" VARCHAR(150) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "bloco" VARCHAR(150) NOT NULL,
    "apartamento" INTEGER NOT NULL,
    "interfone" INTEGER NOT NULL,
    "celular" BIGINT NOT NULL,

    CONSTRAINT "Morador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id" SERIAL NOT NULL,
    "data" DATE NOT NULL,
    "moradorId" INTEGER NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reuniao" (
    "id" SERIAL NOT NULL,
    "data" DATE NOT NULL,
    "assunto" VARCHAR(150) NOT NULL,

    CONSTRAINT "Reuniao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aviso" (
    "id" SERIAL NOT NULL,
    "assunto" VARCHAR(150) NOT NULL,
    "mensagem" TEXT NOT NULL,
    "dataPostagem" TIMESTAMPTZ(3) NOT NULL,
    "dataEvento" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Aviso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reclamacao" (
    "id" SERIAL NOT NULL,
    "tipo" VARCHAR(150) NOT NULL,
    "assunto" VARCHAR(150) NOT NULL,
    "mensagem" TEXT NOT NULL,
    "dataPostagem" TIMESTAMPTZ(3) NOT NULL,
    "moradorId" INTEGER NOT NULL,

    CONSTRAINT "Reclamacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Morador_id_key" ON "Morador"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Morador_email_key" ON "Morador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_id_key" ON "Reserva"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_data_key" ON "Reserva"("data");

-- CreateIndex
CREATE UNIQUE INDEX "Reuniao_id_key" ON "Reuniao"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Reuniao_data_key" ON "Reuniao"("data");

-- CreateIndex
CREATE UNIQUE INDEX "Aviso_id_key" ON "Aviso"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Reclamacao_id_key" ON "Reclamacao"("id");

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_moradorId_fkey" FOREIGN KEY ("moradorId") REFERENCES "Morador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reclamacao" ADD CONSTRAINT "Reclamacao_moradorId_fkey" FOREIGN KEY ("moradorId") REFERENCES "Morador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
