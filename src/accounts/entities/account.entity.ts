import { Shop } from 'src/shops/entities/shop.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { HistoryLogin } from './history-login.entity';
import { Client } from './client.entity';

@Entity({name: 'accounts'})
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'username'})
    username: string;

    @Column({name: 'password'})
    password: string;

    @Column({name: 'status'})
    status: string;

    @Column({name: 'type'})
    type: string;

    @Column({name: 'time_registered'})
    timeRegistered: number;

    @OneToMany(() => Shop, (shop) => shop.account)
    shops: Shop[];

    @OneToMany(() => HistoryLogin, (historyLogin) => historyLogin.account)
    historyLogin: HistoryLogin[];

    @OneToOne(() => Client, (client) => client.account)
    client: Client[];
}