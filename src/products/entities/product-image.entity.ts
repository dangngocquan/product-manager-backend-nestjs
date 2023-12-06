import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({name: 'products_images'})
export class ProductImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'product_id'})
    productId: number;

    @Column({name: 'time_added'})
    timeAdded: number;

    @ManyToOne(() => Product, (product) => product.productImages)
    @JoinColumn({name: 'product_id'})
    product: Product;
}