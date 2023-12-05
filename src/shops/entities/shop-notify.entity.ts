import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'shop_notifications'})
export class Ward {
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
}