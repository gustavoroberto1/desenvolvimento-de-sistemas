import 'reflect-metadata';
import fastify from "fastify";
import { taskController } from "./controller/TaskController";
import { AppDataSource } from "./config/data-source";

const app = fastify();

AppDataSource.initialize().then(() => {
    app.register(taskController);


    const PORT = 3333;
    app.listen({ port: PORT }).then(() => {
        console.log(`Backend rodando na porta ${PORT}!`)
    })
})
