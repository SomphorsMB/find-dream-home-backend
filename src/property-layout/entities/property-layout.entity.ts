import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class PropertyLayout {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: true})
    layout1:string;

    @Column({nullable: true})
    layout2:string;

    @Column({nullable: true})
    layout3:string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}
