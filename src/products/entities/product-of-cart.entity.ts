import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'products_of_carts'})
export class ProductOfCart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'product_id'})
    productId: number;

    @Column({name: 'card_id'})
    cardId: number;

    @Column({name: 'time_added'})
    timeAdded: string;

    @Column({name: 'product_variant_id'})
    productVariantId: string;
}