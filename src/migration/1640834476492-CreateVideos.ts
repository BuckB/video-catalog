import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVideos1640834476492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "videos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "title",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "category_id",
                        type: "uuid"
                    },
                    {
                        name: "duration",
                        type: "numeric"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_videos_categories",
                        columnNames: ["category_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "categories"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("videos");
        await queryRunner.dropTable("videos_categories_categories");
    }

}
