import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity("videos")
export class Video {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @ManyToMany(() => Category, category => category.videos)
    @JoinTable()
    categories!: Category[];

    @Column()
    duration!: number;

    @Column()
    created_at!: Date;

}
