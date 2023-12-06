import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Shop } from './shop.entity';
import { Client } from 'src/accounts/entities/client.entity';

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

    @ManyToOne(() => Shop, (shop) => shop.followers)
    @JoinColumn({name: 'shop_id'})
    shop: Shop;

    @ManyToOne(() => Client, (client) => client.followersOfShop)
    @JoinColumn({name: 'follower_id'})
    client: Client;
}