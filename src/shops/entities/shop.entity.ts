import { Account } from 'src/accounts/entities/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ShopNotify } from './shop-notify.entity';
import { Product } from 'src/products/entities/product.entity';
import { FollowerOfShop } from './follower-of-shop.entity';

@Entity({name: 'shops'})
export class Shop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'owner_id'})
    ownerId: number;

    @Column({name: 'username'})
    username: string;

    @Column({name: 'brand_name'})
    brandName: string;

    @Column({name: 'time_created'})
    timeCreated: number;

    @Column({name: 'logo'})
    logo: string;

    @Column({name: 'status'})
    status: string;

    @ManyToOne(() => Account, (account) => account.shops)
    @JoinColumn({name: 'owner_id'})
    account: Account;

    @OneToMany(() => ShopNotify, (shopNotify) => shopNotify.shop)
    shopNotifications: ShopNotify[];

    @OneToMany(() => Product, (product) => product.shop)
    products: Product[];

    @OneToMany(() => FollowerOfShop, (followerOfShop) => followerOfShop.shop)
    followers: FollowerOfShop[];
}