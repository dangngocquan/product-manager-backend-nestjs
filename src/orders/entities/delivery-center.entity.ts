import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from './order.entity';

@Entity({name: 'delivery_centers'})
export class DeliveryCenter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name'})
    name: string;

    @Column({name: 'fee'})
    fee: number;

    @Column({name: 'status'})
    status: string;

    @OneToMany(() => Order, (order) => order.deliveryCenter)
    orders: Order[];
}