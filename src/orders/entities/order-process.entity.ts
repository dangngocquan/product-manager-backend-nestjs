import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity({name: 'order_processes'})
export class OrderProcess {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'time_ordered'})
    timeOrdered: number;

    @Column({name: 'time_prepared'})
    timePrepared: number;

    @Column({name: 'time_completed'})
    timeCompleted: number;

    @Column({name: 'time_cancelled'})
    timeCancelled: number;

    @Column({name: 'time_registered'})
    timeRegistered: number;

    @OneToOne(() => Order, (order) => order.orderProcess)
    orders: Order[];
}