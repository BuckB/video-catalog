import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { uuidv4 } from "../lib/uuid-gen";
import { Category } from "./Category";

@Entity("videos")
export class Video {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @Column()
    duration: number;

    @Column()
    created_at: Date;

    constructor(id?: string,
        name?: string,
        description?: string,
        category_id?: string,
        category?: Category,
        duration?: number,
        created_at?: Date) {
        this.id = id || uuidv4();
        this.name = name || "default";
        this.description = description || "default";
        this.category_id = category_id || "null";
        this.category = category || new Category();
        this.duration = duration || 0;
        this.created_at = created_at || new Date();
    }
}
