import { Address } from 'src/accounts/entities/address.entity';
import { ProductVariant } from 'src/products/entities/product-variant.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { DeliveryCenter } from './delivery-center.entity';
import { OrderProcess } from './order-process.entity';
import { OrderPaymentInfo } from './order-payment-info.entity';

@Entity({name: 'orders'})
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'product_variation_id'})
    productVariantionId: number;

    @Column({name: 'receiver_id'})
    receiverId: number;

    @Column({name: 'delivery_center_id'})
    deliveryCenterId: number;

    @Column({name: 'process_id'})
    processId: number;

    @Column({name: 'payment_info_id'})
    paymentInfoId: number;

    @Column({name: 'status'})
    status: string;

    @ManyToOne(() => Address, (address) => address.orders)
    @JoinColumn({name: 'receiver_id'})
    receiver: Address;

    @ManyToOne(() => ProductVariant, (productVariant) => productVariant.orders)
    @JoinColumn({name: 'product_variation_id'})
    productVariant: ProductVariant;

    @ManyToOne(() => DeliveryCenter, (deliveryCenter) => deliveryCenter.orders)
    @JoinColumn({name: 'delivery_center_id'})
    deliveryCenter: DeliveryCenter;

    @OneToOne(() => OrderProcess, (orderProcess) => orderProcess.orders)
    @JoinColumn({name: 'process_id'})
    orderProcess: OrderProcess;

    @OneToOne(() => OrderPaymentInfo, (orderPaymentInfo) => orderPaymentInfo.order)
    @JoinColumn({name: 'payment_info_id'})
    paymentInfo: OrderPaymentInfo;
}