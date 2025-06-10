import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class Game {
    @PrimaryColumn({
        type: 'varchar',
        length: 36,
        generatedIdentity: "ALWAYS",
        default: "gen_random_uuid()"
    })
    id: string;

    @Column("text")
    title: string;

    @Column("text")
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
} 