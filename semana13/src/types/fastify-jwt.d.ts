import 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    jwtVerify(): Promise<void>;
    user: {
      id: string;
      name: string;
      email: string;
      birthDate: Date;
    };
  }

  interface FastifyInstance {
    authenticate(request: FastifyRequest, reply: FastifyReply): Promise<void>;
    jwt: {
      sign: FastifyJWT['sign'];
      verify: FastifyJWT['verify'];
      decode: FastifyJWT['decode'];
    };
  }
}
