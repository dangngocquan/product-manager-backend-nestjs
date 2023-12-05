import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'followers_of_shops'})
export class FollowerOfShop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'shop_id'})
    shopId: number;

    @Column({name: 'follower_id'})
    followerId: number;

    @Column({name: 'time_followed'})
    timeFollowed: number;
}