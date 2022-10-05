const express = require("express")
const app = express()
const PORT = 3000

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

app.use(express.json())

app.get("/api", (req, res) => {
  res.json("hello world")
})

app
  .route("/api/moradores")
  .get(async (req, res) => {
    const moradores = await prisma.morador.findMany()

    // é necessário converter o campo 'celular' de BigInt do banco de dados para String, já que o serializer do JS não suporta BigInt.
    moradores.forEach((morador) => {
      morador["celular"] = String(morador["celular"])
    })

    res.json(moradores)
  })

  .post(async (req, res) => {
    await prisma.morador.create({
      data: req.body,
    })
    res.end()
  })

app
  .route("/api/reservas")
  .get(async (req, res) => {
    const reservas = await prisma.reserva.findMany()
    res.json(reservas)
  })

  .post(async (req, res) => {
    let reserva = req.body
    const data = new Date(reserva["data"])
    reserva["data"] = data

    await prisma.reserva.create({
      data: reserva,
    })

    res.end()
  })

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
