import Home from "../views/Home.vue"
import Moradores from "../views/Moradores.vue"
import Calendario from "../views/Calendario.vue"
import Avisos from "../views/Avisos.vue"
import Reservas from "../views/Reservas.vue"
import Reclamacoes from "../views/Reclamacoes.vue"
import Reunioes from "../views/Reunioes.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/moradores", component: Moradores },
  { path: "/calendario", component: Calendario },
  { path: "/avisos", component: Avisos },
  { path: "/reservas", component: Reservas },
  { path: "/reclamacoes", component: Reclamacoes },
  { path: "/reunioes", component: Reunioes }
]

export default routes
