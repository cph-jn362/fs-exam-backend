import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { UserEntity } from "src/auth/entities/user.entity";

@Entity()
export class TodoEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string
    
    @Column()
    done: boolean

}