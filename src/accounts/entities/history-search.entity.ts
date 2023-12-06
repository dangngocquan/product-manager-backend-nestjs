import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from './client.entity';

@Entity({name: 'history_searchs'})
export class HistorySearch {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'user_id'})
    userId: number;

    @Column({name: 'content'})
    content: string;

    @Column({name: 'time_searched'})
    timeSearched: number;

    @ManyToOne(() => Client, (client) => client.historySearches)
    @JoinColumn({name: 'user_id'})
    user: Client;
}