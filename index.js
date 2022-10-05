const express = require("express")
const app = express()
const PORT = 3000

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

app.use(express.json())

app.get("/api", (req, res) => {
  res.json("hello world")
})

app.get("/api/moradores", async (req, res) => {
  const moradores = await prisma.morador.findMany()

  // é necessário converter o campo 'celular' de BigInt do banco de dados para String, já que o serializer do JS não suporta BigInt.
  moradores.forEach((morador) => {
    morador["celular"] = String(morador["celular"])
  })

  res.json(moradores)
})

app.post("/api/moradores", async (req, res) => {
  await prisma.morador.create({
    data: req.body
  })
  res.end()
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})