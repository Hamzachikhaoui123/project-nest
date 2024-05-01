import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Users {
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number;
    @Column()
    username:string;
    @Column({unique:true})
    email:string
    @Column()
    password:string
    @Column()
    createdAt:Date;


}
