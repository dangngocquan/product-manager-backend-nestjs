import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'shop_id'})
    shopId: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    price: number;

    @Column()
    currency: string;

    @Column()
    stock: number;

    @Column({name: 'time_added'})
    timeAdded: number;

    @Column()
    description: string;

    @Column()
    status: string;

    @Column()
    sold: number;   
}