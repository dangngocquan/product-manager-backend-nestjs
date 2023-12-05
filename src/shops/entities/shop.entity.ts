import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'shops'})
export class Shop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'owner_id'})
    ownerId: number;

    @Column({name: 'username'})
    username: string;

    @Column({name: 'brand_name'})
    brandName: string;

    @Column({name: 'time_created'})
    timeCreated: number;

    @Column({name: 'logo'})
    logo: string;

    @Column({name: 'status'})
    status: string;
}