import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'districts'})
export class District {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name'})
    name: string;

    @Column({name: 'city_id'})
    districtId: number;

    @Column({name: 'status'})
    status: string;
}