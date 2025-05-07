import { FastifyInstance } from "fastify";
import { taskService } from "../services/taskService";

// crontrolle recebe informação e passa informação

export async function taskController(app: FastifyInstance) {
    // pode ser usado reponse ou reply
    app.post("/task", (request, response) => {
        // PEGAR INFROMAÇÃO DE FRON OU DE QUEM CHAMA O ENDPOINT(TEXT)
        const body = request.body as { text: string }
        try {
            // pega informação do service
            taskService.create(body.text);
            // retorna a resposta
            return response.code(201).send();
            // retorna o vetor
            // return response.code(200).send(newTask);
        } catch (error: any) {
            return response.code(409).send({ error: error.message })
        }
    })
    app.get("/task", (_, response) => {
        const list = taskService.getAll();
        // RETORNA A RESPOSTA PARA QUEM CHAMOU 
        return response.code(200).send(list)
    })

    app.get("/taks/:id", (request, Response) => {
        // CAPTURA INFORMAÇÃO
        const { id } = request.params as { id: string }
        // REPASSA INFORMAÇÃO E RECEBE INFORMAÇÃO PROCESSADA
        const task = taskService.getById(id);
        // RETORNA A RESPOSTA PARA QUEM CHAMOU 
        return Response.send(task)
    })
    app.patch("/task/:id/completed", (request, response) => {
        // CAPTURA INFORMAÇÃO
        const { id } = request.params as { id: string }
        const { completed } = request.body as { completed: boolean }
        // REPASSA INFORMAÇÃO E RECEBE INFORMAÇÃO PROCESSADA
        const task = taskService.updateCompleted(id, completed)
        // RETORNA A RESPOSTA PARA QUEM CHAMOU 
        return response.send(task)
    })
    app.patch("/task/:id/text", (request, response) => {
        // CAPTURA INFORMAÇÃO
        const { id } = request.params as { id: string }
        const { text } = request.body as { text: string }
        // REPASSA INFORMAÇÃO E RECEBE INFORMAÇÃO PROCESSADA
        const task = taskService.updateText(id, text);
        // RETORNA A RESPOSTA PARA QUEM CHAMOU 
        return response.code(200).send(task);

    })

}