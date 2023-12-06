import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from './client.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity({name: 'favourite_products'})
export class FavouriteProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'product_id'})
    productId: number;

    @Column({name: 'user_id'})
    userId: number;

    @Column({name: 'time_liked'})
    timeLiked: number;

    @ManyToOne(() => Client, (client) => client.favouriteProducts)
    @JoinColumn({name: 'user_id'})
    client: Client;

    @ManyToOne(() => Product, (product) => product.favouriteProducts)
    @JoinColumn({name: 'product_id'})
    product: Product;
}