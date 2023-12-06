import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Address } from './address.entity';
import { District } from './district.entity';

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

    @OneToMany(() => Address, (address) => address.ward)
    addresses: Address[];

    @ManyToOne(() => District, (district) => district.wards)
    @JoinColumn({name: 'district_id'})
    district: District;
}