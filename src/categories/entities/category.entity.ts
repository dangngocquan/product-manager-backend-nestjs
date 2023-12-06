import { ProductOfCategory } from 'src/products/entities/product-of-category.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name: 'categories'})
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name'})
    name: string;

    @Column({name: 'image'})
    image: string; 

    @Column({name: 'level'})
    level: number;

    @Column({name: 'parent_category_id'})
    parentCategoryId: number;

    @Column({name: 'time_added'})
    timeAdded: number;

    @Column({name: 'status'})
    status: string;

    @OneToMany(() => ProductOfCategory, (productOfCategory) => productOfCategory.category)
    products: ProductOfCategory[];
}