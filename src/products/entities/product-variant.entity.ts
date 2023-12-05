import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'product_variants'})
export class ProductVariant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'product_id'})
    productId: number;

    @Column({name: 'price'})
    price: number;

    @Column({name: 'status'})
    status: string;
}