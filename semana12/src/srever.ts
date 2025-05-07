import fastify from "fastify";
import { Task } from "./entity/task";
import { error } from "console";
import { taskController } from "./controller/Task.Controller";

const app = fastify();
// FAKE BANCO DE DADOS


app.register(taskController);

app.listen({ port: 3333 }).then(() => {
    console.log("Backend rodando na porta 3333!")
})