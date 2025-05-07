import { Task } from "../entity/Task";
import { prisma } from "../prisma/client";

export class TaskRepository {
    async create(task: Task) {
        await prisma.create(task);
    }
}