export const loginSchema = {
  body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: { type: 'string', format: 'email'},
      password: { type: 'string'}
    }
  },
  tags: ['Auth'],
  summary: 'Login do usuário',
};

export const registerSchema = {
  body: {
    type: 'object',
    required: ['name', 'email', 'password', 'birthDate'],
    properties: {
      name: { type: 'string', },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 6 },
      birthDate: { type: 'string', format: 'date' }
    }
  },
  tags: ['Auth'],
  summary: 'Registro de usuário',
};