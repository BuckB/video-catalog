import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { uuidv4 } from "../lib/uuid-gen";

@Entity("categories")
export class Category {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    decription: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(id: string = uuidv4(),
        name: string = "default",
        description: string = "default",
        created_at: Date = new Date()) {
        this.id = id;
        this.name = name;
        this.decription = description;
        this.created_at = created_at;
    }
}
