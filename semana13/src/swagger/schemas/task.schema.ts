export const createTaskSchema = {
  body: {
    type: 'object',
    required: ['text'],
    properties: {
      text: { type: 'string' }
    }
  },
  tags: ['Tasks'],
  summary: 'Criar uma nova tarefa',
  security: [{ bearerAuth: [] }],
};


export const generalTaskSchema = {
  tags: ['Tasks'],
  security: [{ bearerAuth: [] }],
}