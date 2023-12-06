import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';
import { ProductVariantDetails } from './product-variant-detail.entity';
import { Order } from 'src/orders/entities/order.entity';

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

    @ManyToOne(() => Product, (product) => product.productVariants)
    @JoinColumn({name: 'product_id'})
    product: Product;

    @OneToMany(() => ProductVariantDetails, (productVariantDetails) => productVariantDetails.productVariant)
    productVariantDetails: ProductVariantDetails[];

    @OneToMany(() => Order, (order) => order.productVariant)
    orders: Order[];
}