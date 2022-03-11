import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Agent {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:  string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    phoneNumber: number;

    @Column({unique: true})
    email: string;

    @Column()
    profile: string;

    @Column()
    description: string;

    @Column({nullable: true})
    facebook: string;

    @Column({nullable: true})
    twitter: string;

    @Column({nullable: true})
    instagram: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}
