import fastify from "fastify";
import { taskController } from "./controller/teskController";

const app = fastify()

// registo que mostra onde estão as rotas de app
app.register(taskController)

// funçao de ouvir chamadas
const PORT = 3333
app.listen({ port: PORT }).then(() => { console.log(`Backend rodando na porta ${PORT}!`) })
