import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./Video";

@Entity("categories")
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @ManyToMany(() => Video, video => video.categories)
    videos!: Video[];

    @CreateDateColumn()
    created_at!: Date;
}
