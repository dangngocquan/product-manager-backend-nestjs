import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'accounts'})
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'username'})
    username: string;

    @Column({name: 'password'})
    password: string;

    @Column({name: 'status'})
    status: string;

    @Column({name: 'type'})
    type: string;

    @Column({name: 'time_registered'})
    timeRegistered: number;
}