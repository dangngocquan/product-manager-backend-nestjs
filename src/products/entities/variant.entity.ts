import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { VariantValue } from './variant-value.entity';

@Entity({name: 'variants'})
export class Variant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'variant_name'})
    variantName: string;

    @OneToMany(() => VariantValue, (variantValue) => variantValue.variant)
    variantValues: VariantValue[];
}