import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'clients'})
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'account_id'})
    accountId: number;

    @Column({name: 'nickname'})
    nickname: string;

    @Column({name: 'email'})
    email: string;

    @Column({name: 'phone_number'})
    phoneNumber: string;

    @Column({name: 'gender'})
    gender: string;

    @Column({name: 'birthday'})
    birthday: number;

    @Column({name: 'portrait'})
    portrait: string;
}