import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'products_of_categories'})
export class ProductOfCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'category_id'})
    categoryId: number;

    @Column({name: 'product_id'})
    productId: number;
}