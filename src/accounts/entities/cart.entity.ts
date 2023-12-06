import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Client } from './client.entity';
import { ProductOfCart } from 'src/products/entities/product-of-cart.entity';

@Entity({name: 'carts'})
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; 

    @Column({name: 'owner_id'})
    ownerId: number;

    @Column({name: 'time_created'})
    timeCreated: number;

    @ManyToOne(() => Client, (client) => client.carts)
    @JoinColumn({name: 'owner_id'})
    owner: Client;

    @OneToMany(() => ProductOfCart, (productOfCart) => productOfCart.cart)
    productsOfCart: ProductOfCart[];

}