import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Variant } from './variant.entity';
import { ProductVariantDetails } from './product-variant-detail.entity';

@Entity({name: 'variant_values'})
export class VariantValue {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'variant_id'})
    variantId: number;

    @Column({name: 'value'})
    value: string;

    @ManyToOne(() => Variant, (variant) => variant.variantValues)
    @JoinColumn({name: 'variant_id'})
    variant: Variant;

    @OneToMany(() => ProductVariantDetails, (productVariantDetails) => productVariantDetails.variantValue)
    productVariantDetails: ProductVariantDetails[];
}