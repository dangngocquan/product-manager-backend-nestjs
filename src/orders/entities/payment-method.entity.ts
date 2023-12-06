import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrderPaymentInfo } from './order-payment-info.entity';

@Entity({name: 'payment_methods'})
export class PaymentMethod {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name'})
    name: string;

    @Column({name: 'status'})
    status: string;

    @OneToMany(() => OrderPaymentInfo, (orderPaymentInfo) => orderPaymentInfo.paymentMethod)
    ordersPaymentInfo: OrderPaymentInfo[];
}