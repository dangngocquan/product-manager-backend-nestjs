import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToMany } from 'typeorm';
import { Account } from './account.entity';
import { FollowerOfShop } from 'src/shops/entities/follower-of-shop.entity';
import { FavouriteProduct } from './favourite-product.entity';
import { Cart } from './cart.entity';
import { HistorySearch } from './history-search.entity';
import { FollowerOfUser } from './follower-of-user.entity';
import { UserNotify } from './user-notify.entity';
import { Address } from './address.entity';

@Entity({name: 'clients'})
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'account_id'})
    accountId: number;

    @Column({name: 'nickname'})
    nickname: string;

    @Column({name: 'email'})
    email: string;

    @Column({name: 'phone_number'})
    phoneNumber: string; 

    @Column({name: 'gender'})
    gender: string;

    @Column({name: 'birthday'})
    birthday: number;

    @Column({name: 'portrait'})
    portrait: string;

    @OneToOne(() => Account, (account) => account.client)
    @JoinColumn({name: 'account_id'})
    account: Account;

    @OneToMany(() => FollowerOfShop, (followerOfShop) => followerOfShop.client)
    followersOfShop: FollowerOfShop[];

    @OneToMany(() => FavouriteProduct, (favouriteProduct) => favouriteProduct.client)
    favouriteProducts: FavouriteProduct[];

    @OneToMany(() => Cart, (cart) => cart.owner)
    carts: Cart[];

    @OneToMany(() => HistorySearch, (historySearch) => historySearch.user)
    historySearches: HistorySearch[];

    @OneToMany(() => FollowerOfUser, (followerOfUser) => followerOfUser.user)
    usersInFollowerOfUser: FollowerOfUser[];

    @OneToMany(() => FollowerOfUser, (followerOfUser) => followerOfUser.follower)
    followersInFollowerOfUser: FollowerOfUser[];

    @OneToMany(() => UserNotify, (userNotify) => userNotify.user)
    userNotifications: UserNotify[];

    @OneToMany(() => Address, (address) => address.user)
    addresses: Address[];
}