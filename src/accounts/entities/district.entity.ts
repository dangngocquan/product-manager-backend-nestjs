import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Address } from './address.entity';
import { Ward } from './ward.entity';
import { City } from './city.entity';

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

    @OneToMany(() => Address, (address) => address.district)
    addresses: Address[];

    @OneToMany(() => Ward, (ward) => ward.district)
    wards: Ward[]; 

    @ManyToOne(() => City, (city) => city.districts)
    @JoinColumn({name: 'city_id'})
    city: City;
}