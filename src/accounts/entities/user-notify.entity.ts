import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from './client.entity';

@Entity({name: 'user_notifications'})
export class UserNotify {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'user_id'})
    userId: number;

    @Column({name: 'title'})
    title: string;

    @Column({name: 'description'})
    description: string;

    @Column({name: 'details_info'})
    detailsInfo: string;

    @Column({name: 'time_created'})
    timeCreated: number;

    @Column({name: 'is_seen'})
    isSeen: number;

    @ManyToOne(() => Client, (client) => client.userNotifications)
    @JoinColumn({name: 'user_id'})
    user: Client;
}