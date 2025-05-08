import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { randomUUID } from 'crypto';

@Entity('tasks')
export class Task {
    @PrimaryColumn('uuid')
    id: string = randomUUID();

    @Column("varchar")
    text: string = '';

    @Column('boolean', { default: false })
    completed: boolean = false;

    @CreateDateColumn()
    createdAt: Date = new Date();

    @UpdateDateColumn()
    updatedAt: Date = new Date();

    constructor(text?: string) {
        if (text) this.text = text;
    }

    public setCompleted() {
        this.completed = !this.completed;
    }

    public setText(text: string) {
        this.text = text;
    }
}
