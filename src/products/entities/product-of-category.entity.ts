import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './product.entity';
import { Category } from 'src/categories/entities/category.entity';

@Entity({name: 'products_of_categories'})
export class ProductOfCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'category_id'})
    categoryId: number;

    @Column({name: 'product_id'})
    productId: number;

    @ManyToOne(() => Product, (product) => product.productsOfCategory)
    @JoinColumn({name: 'product_id'})
    product: Product;

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({name: 'category_id'})
    category: Category;
}