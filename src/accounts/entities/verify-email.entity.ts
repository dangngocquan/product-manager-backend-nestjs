import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'verify-emails'})
export class VerifyEmail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'email'})
    email: string;

    @Column({name: 'otp'})
    otp: string;

    @Column({name: 'time'})
    time: number;
}