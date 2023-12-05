import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'cities'})
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name'})
    name: string;

    @Column({name: 'status'})
    status: string;
}