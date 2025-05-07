import { Task } from "../entity/Task";
import { prisma } from "../prisma/client";

export class TaskRepository {
    // async create(task: Task) {
    //     await prisma.create(task);
    // }
     await prisma.task.create({
            data: {
                id: task.getId(),
                text: task.getText(),
                completed: task.getCompleted(),
                createdAt: task.getCreatedAt(),
                updatedAt: task.getUpdatedAt()
            }
        });
}
