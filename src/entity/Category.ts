import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Video } from "./Video";

@Entity("categories")
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    @Unique()
    name!: string;

    @ManyToMany(() => Video, video => video.categories)
    videos!: Video[];

    @CreateDateColumn()
    created_at!: Date;
}
