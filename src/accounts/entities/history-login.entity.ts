import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Account } from './account.entity';

@Entity({name: 'history_logins'})
export class HistoryLogin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'account_id'})
    accountId: number;

    @Column({name: 'time'})
    time: number;

    @ManyToOne(() => Account, (account) => account.historyLogin)
    @JoinColumn({name: 'account_id'})
    account: Account;
}