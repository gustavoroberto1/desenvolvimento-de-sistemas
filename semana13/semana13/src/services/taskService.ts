import { error } from "console";
import { Task } from "../entity/task";

class TaskService {
    // FAKE BANCO DE DADOS
    private tasklist: Task[] = [];

    public create(text: string) {

        // VERIFICAR SE JA EXISTE UMA TAREFA COM O TEXT INFORMADO
        const textAlreadyExist = this.tasklist.find(task => task.getText() === text);
        // SE EXISTIR- REPOSTA COM ERRO
        if (textAlreadyExist) {
            throw new Error("Ja existe uma tarefa com esse texto")
        }
        // CRIAR UM OBJETODO TIPO TASK
        const newTask = new Task(text)
        // ADICIONAR NA LISTA OU NO BANCO DE DADOS
        this.tasklist.push(newTask)
    }
    public getAll(): Task[] {
        return this.tasklist
    }
    public getById(id: string): Task | null {
        const task = this.tasklist.find(task => task.getId() === id);
        // operador ternario, se caso taks existir retorna a task se não retorna null
        return task ? task : null
    }
    public updateCompleted(id: string, Completed: boolean) {
        const task = this.getById(id);
        if (task === null) {
            throw new Error("Tarefa não foi encontrada")
        }
        task.setCompleted(Completed)
        return task
    }
    public updateText(id: string, text: string) {
        const task = this.getById(id);
        if (task === null) {
            throw new Error("Tarefa não foi encontrada")
        }
        task.setText(text);
        return task
    }
}
//  serve pra expota a class por inteiro 
export const taskService = new TaskService();