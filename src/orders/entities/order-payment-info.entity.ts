import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { PaymentMethod } from './payment-method.entity';
import { Order } from './order.entity';

@Entity({name: 'order_payments_info'})
export class OrderPaymentInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'product_price'})
    productPrice: number;

    @Column({name: 'quantity'})
    quantity: number;

    @Column({name: 'deliver_fee'})
    deliverFee: number;

    @Column({name: 'payment_method_id'})
    paymentMethodId: number;

    @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.ordersPaymentInfo)
    @JoinColumn({name: 'payment_method_id'})
    paymentMethod: PaymentMethod;

    @OneToOne(() => Order, (order) => order.paymentInfo)
    order: Order;
}