import { Task } from "../entity/task";

class TaskService {

    private taskList: Task[] = []
    public create(text: string): void {
        if (textAlreadExist =) {
            //return reply.code(400).send ({error:"vc nao enviou a propriedade text"})
        }

        //verificar se ja existe tarefa com o texto informado
        //se existir responder com erro

        const textAlreadExist = this.taskList.find(task => task.getText() === text);
        if (textAlreadExist) {
            // return reply.code(409).send({error:"ja existe uma tarefa com texto informado"})
        }
        //CRIAR OBJETO DO TIPO TASK
        const newTask = new Task(text);
        this.taskList.push(newTask);
    }
    public getAll(): Task[] {
        return this.taskList;
    }


}
export const taskService = new TaskService();