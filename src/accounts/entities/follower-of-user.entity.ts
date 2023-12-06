import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from './client.entity';

@Entity({name: 'followers_of_users'})
export class FollowerOfUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'user_id'})
    userId: number;

    @Column({name: 'follower_id'})
    password: number;

    @Column({name: 'time_followed'})
    timeFollowed: number;

    @ManyToOne(() => Client, (client) => client.usersInFollowerOfUser)
    @JoinColumn({name: 'user_id'})
    user: Client;

    @ManyToOne(() => Client, (client) => client.followersInFollowerOfUser)
    @JoinColumn({name: 'follower_id'})
    follower: Client;
}