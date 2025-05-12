import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { authService } from "../service/AuthService";
import { loginSchema, registerSchema } from "../swagger/schemas/auth.schema";
import { CreateUserType, LoginType } from "../types/login";

export async function authController(app: FastifyInstance) {
    app.post("/login", { schema: loginSchema },async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as LoginType;
        try {
            const token = await authService.login({ email: body.email, password: body.password }, app);
            return reply.code(200).send({ access_token: token });
        } catch (error: any) {
          return reply.status(401).send({ error: error.message });
        }
    })

    app.post('/register', { schema: registerSchema },async (request, reply) => {
      try {
        const body = request.body as CreateUserType;
        const user = await authService.register(body);
        return reply.status(201).send(user);
      } catch (error: any) {
        return reply.status(400).send({ error: error.message });
      }
    });
}