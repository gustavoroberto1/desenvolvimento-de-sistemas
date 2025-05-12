export const swaggerConfig = {
  openapi: {
    info: {
      title: 'Minha API',
      description: 'Documentação com Swagger + Fastify',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  exposeRoute: true,
};
