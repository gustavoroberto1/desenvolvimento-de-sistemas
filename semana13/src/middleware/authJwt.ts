import { FastifyReply } from 'fastify';
import fp from 'fastify-plugin';

export default fp(async (fastify, opts) => {
  fastify.register(require('fastify-jwt'), {
    secret: process.env.JWT_SECRET
  });

  fastify.decorate('authenticate', async (request: any, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      return reply.status(401).send({ error: 'Not Authorized' });
    }
  });
});
