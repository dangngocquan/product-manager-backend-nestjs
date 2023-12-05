import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}