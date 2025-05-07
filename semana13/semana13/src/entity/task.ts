import { randomUUID } from 'crypto'

export class Task {
    public id: string;
    public text: string;
    public completed: boolean
    public createAt: Date;
    public updatedAt: Date;

    constructor(text: string) {
        this.id = randomUUID()
        this.text = text
        this.completed = false
        this.createAt = new Date()
        this.updatedAt = new Date()
    }

    public getId() {
        return this.id
    }
    public getText() {
        return this.text
    }
    public getCompleted() {
        return this.completed
    }
    public getCreateAt() {
        return this.createAt
    }
    public getupdatedAt() {
        return this.updatedAt
    }
    public setCompleted(completed: boolean) {
        this.completed = completed
        this.updatedAt = new Date
    }
    public setText (text:string){
        this.text = text
        this.updatedAt = new Date
    }


}