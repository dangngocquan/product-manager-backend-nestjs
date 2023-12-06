import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Address } from './address.entity';
import { District } from './district.entity';

@Entity({name: 'cities'})
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name'})
    name: string;

    @Column({name: 'status'})
    status: string;

    @OneToMany(() => Address, (address) => address.city)
    addresses: Address[];

    @OneToMany(() => District, (district) => district.city)
    districts: District[];
}