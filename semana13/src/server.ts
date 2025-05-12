import cors from "@fastify/cors";
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import fastify from "fastify";
import { authController } from "./controller/AuthController";
import { taskController } from "./controller/TaskController";
import authJwt from "./middleware/authJwt";
import { swaggerConfig } from "./swagger/swagger";

const app = fastify();

app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PATCH", "DELETE"]
});

app.register(swagger, swaggerConfig as any);
app.register(swaggerUI, { routePrefix: '/docs',   uiConfig: {
  docExpansion: 'list'
} });

app.register(authJwt)
app.register(authController)
app.register(taskController);

const PORT = 3333;
app.listen({ port: PORT }).then(() => {
    console.log(`Backend rodando na porta ${PORT}!`)
})
