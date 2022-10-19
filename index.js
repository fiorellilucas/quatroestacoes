const express = require("express")
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
const cors = require('cors')

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

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
    const reservas = await prisma.reserva.findMany({
      include: {
        morador: {
          select: {
            nome: true,
            sobrenome: true,
            bloco: true,
            apartamento: true
          }
        }
      }
    })
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

app
  .route("/api/reunioes")
  .get(async (req, res) => {
    const reunioes = await prisma.reuniao.findMany()
    res.json(reunioes)
  })

  .post(async (req, res) => {
    let reuniao = req.body
    const data = new Date(reuniao["data"])
    reuniao["data"] = data

    await prisma.reuniao.create({
      data: reuniao
    })
    res.end()
  })

app
  .route("/api/avisos")
  .get(async (req, res) => {
    const avisos = await prisma.aviso.findMany()
    res.json(avisos)
  })

  .post(async (req, res) => {
    let aviso = req.body

    if (aviso.hasOwnProperty("dataEvento")) {
      aviso["dataEvento"] = new Date(aviso["dataEvento"])
    }
    
    await prisma.aviso.create({
      data: aviso
    })
    res.end()
  })

app
  .route("/api/reclamacoes")
  .get(async (req, res) => {
    const reclamacoes = await prisma.reclamacao.findMany()
    res.json(reclamacoes)
  })

  .post(async (req, res) => {
    const reclamacao = req.body

    await prisma.reclamacao.create({
      data: reclamacao
    })
    res.end()
  })

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
