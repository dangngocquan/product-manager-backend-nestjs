import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Shop } from './shop.entity';

@Entity({name: 'shop_notifications'})
export class ShopNotify {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'shop_id'})
    shopId: number;

    @Column({name: 'title'})
    title: string;

    @Column({name: 'description'})
    description: string;

    @Column({name: 'details_info'})
    detailInfo: string;

    @Column({name: 'time_created'})
    timeCreated: number;

    @Column({name: 'is_seen'})
    isSeen: number;

    @ManyToOne(() => Shop, (shop) => shop.shopNotifications)
    @JoinColumn({name: 'shop_id'})
    shop: Shop;
}