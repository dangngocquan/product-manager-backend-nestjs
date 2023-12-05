import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column({name: 'time_addeded'})
    timeAdded: number;

    @Column({name: 'status'})
    status: string;
}