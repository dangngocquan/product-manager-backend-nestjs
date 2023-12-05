import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'history_logins'})
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'account_id'})
    accountId: number;

    @Column({name: 'time'})
    time: number;
}