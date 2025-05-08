import { Task } from '../entity/Task';
import { taskRepository } from '../repository/TaskRepository';

class TaskService {
    async create(text: string): Promise<Task> {
        const task = new Task(text);
        return await taskRepository.save(task);
    }

    async list(): Promise<Task[]> {
        return await taskRepository.find();
    }

    async findById(id: string): Promise<Task | null> {
        return await taskRepository.findOneBy({ id });
    }

    async toggleCompleted(id: string): Promise<Task | null> {
        const task = await this.findById(id);
        if (!task) return null;
        task.setCompleted();
        return await taskRepository.save(task);
    }

    async updateText(id: string, newText: string): Promise<Task | null> {
        const task = await this.findById(id);
        if (!task) return null;
        task.setText(newText);
        return await taskRepository.save(task);
    }

    async delete(id: string): Promise<boolean> {
        const result = await taskRepository.delete(id);
        return result.affected === 1;
    }
}

export const taskService = new TaskService();
