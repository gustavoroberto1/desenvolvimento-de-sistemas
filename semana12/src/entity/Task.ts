import { Script } from "vm";
import { threadId } from "worker_threads";
import { randomUUID } from "crypto";

export class Task {
    public id: String;
    public text: string;
    public completed: boolean;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(text: string){
        this.id = randomUUID();
        this.text = text;
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }


    public getId(){
        return this.id
    }

    public getText(){
        return this.text
    }

    public getCompetd(){
        return this.completed
    }

    public getCreatedAt(){
        return this.createdAt
    }

    public getUpdatedAt(){
        return this.updatedAt
    }


}