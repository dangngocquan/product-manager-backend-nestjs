import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import { Cart } from 'src/accounts/entities/cart.entity';

@Entity({name: 'products_of_carts'})
export class ProductOfCart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'product_id'})
    productId: number;

    @Column({name: 'cart_id'})
    cardId: number;

    @Column({name: 'time_added'})
    timeAdded: string;

    @Column({name: 'product_variant_id'})
    productVariantId: string;

    @ManyToOne(() => Product, (product) => product.productsOfCart)
    @JoinColumn({name: 'product_id'})
    product: Product;

    @ManyToOne(() => Cart, (cart) => cart.productsOfCart)
    @JoinColumn({name: 'cart_id'})
    cart: Cart;
}