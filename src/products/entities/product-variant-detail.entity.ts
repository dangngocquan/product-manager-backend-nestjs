import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ProductVariant } from './product-variant.entity';
import { VariantValue } from './variant-value.entity';

@Entity({name: 'product_variant_details'})
export class ProductVariantDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'product_variant_id'})
    productVariantId: number;

    @Column({name: 'variant_value_id'})
    variantValueId: number;

    @ManyToOne(() => ProductVariant, (productVariant) => productVariant.productVariantDetails)
    @JoinColumn({name: 'product_variant_id'})
    productVariant: ProductVariant;

    @ManyToOne(() => VariantValue, (variantValue) => variantValue.productVariantDetails)
    @JoinColumn({name: 'variant_value_id'})
    variantValue: VariantValue;
}   