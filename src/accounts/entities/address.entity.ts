import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Client } from './client.entity';
import { Ward } from './ward.entity';
import { District } from './district.entity';
import { City } from './city.entity';
import { Order } from 'src/orders/entities/order.entity';

@Entity({name: 'addresses'})
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'user_id'})
    userId: number;

    @Column({name: 'phone_number'})
    phoneNumber: string;

    @Column({name: 'ward_id'})
    wardId: number;

    @Column({name: 'district_id'})
    districtId: number;

    @Column({name: 'city_id'})
    cityId: number;

    @Column({name: 'address'})
    address: string;

    @Column({name: 'is_deliver_address'})
    isDeliverAddress: number;

    @Column({name: 'time_created'})
    timeCreated: number;

    @Column({name: 'status'})
    status: string; 

    @ManyToOne(() => Client, (client) => client.addresses)
    @JoinColumn({name: 'user_id'})
    user: Client;

    @ManyToOne(() => Ward, (ward) => ward.addresses)
    @JoinColumn({name: 'ward_id'})
    ward: Ward;

    @ManyToOne(() => District, (district) => district.addresses)
    @JoinColumn({name: 'district_id'})
    district: District;

    @ManyToOne(() => City, (city) => city.addresses)
    @JoinColumn({name: 'city_id'})
    city: City;

    @OneToMany(() => Order, (order) => order.receiver)
    orders: Order[];
}