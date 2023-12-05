import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'sliders'})
export class Slider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'image'})
    image: string;
}