import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'products_images'})
export class ProductImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'product_id'})
    productId: number;

    @Column({name: 'time_added'})
    timeAdded: number;
}