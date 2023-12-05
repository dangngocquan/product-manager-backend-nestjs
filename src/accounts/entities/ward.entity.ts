import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'wards'})
export class Ward {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name'})
    name: string;

    @Column({name: 'district_id'})
    districtId: number;

    @Column({name: 'status'})
    status: string;
}