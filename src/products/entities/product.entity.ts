import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ProductOfCategory } from './product-of-category.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { ProductImage } from './product-image.entity';
import { ProductVariant } from './product-variant.entity';
import { ProductOfCart } from './product-of-cart.entity';
import { FavouriteProduct } from 'src/accounts/entities/favourite-product.entity';

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

    @OneToMany(() => ProductOfCategory, (productOfCategory) => productOfCategory.product)
    productsOfCategory: ProductOfCategory[];

    @ManyToOne(() => Shop, (shop) => shop.products)
    @JoinColumn({name: 'shop_id'})
    shop: Shop;

    @OneToMany(() => ProductImage, (productImage) => productImage.product)
    productImages: ProductImage[];

    @OneToMany(() => ProductVariant, (productVariant) => productVariant.product)
    productVariants: ProductVariant[];

    @OneToMany(() => ProductOfCart, (productOfCart) => productOfCart.product)
    productsOfCart: ProductOfCart[];

    @OneToMany(() => FavouriteProduct, (favouriteProduct) => favouriteProduct.product)
    favouriteProducts: FavouriteProduct[]; 
}