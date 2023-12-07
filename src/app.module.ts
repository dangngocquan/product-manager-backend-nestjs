import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
// import configuration from './configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Product } from './products/entities/product.entity';
import { ProductOfCategory } from './products/entities/product-of-category.entity';
import { Account } from './accounts/entities/account.entity';
import { VerifyEmail } from './accounts/entities/verify-email.entity';
import { Slider } from './sliders/slide.entity';
import { Shop } from './shops/entities/shop.entity';
import { HistoryLogin } from './accounts/entities/history-login.entity';
import { Client } from './accounts/entities/client.entity';
import { Ward } from './accounts/entities/ward.entity';
import { District } from './accounts/entities/district.entity';
import { City } from './accounts/entities/city.entity';
import { ShopNotify } from './shops/entities/shop-notify.entity';
import { Category } from './categories/entities/category.entity';
import { FollowerOfShop } from './shops/entities/follower-of-shop.entity';
import { FavouriteProduct } from './accounts/entities/favourite-product.entity';
import { Cart } from './accounts/entities/cart.entity';
import { HistorySearch } from './accounts/entities/history-search.entity';
import { FollowerOfUser } from './accounts/entities/follower-of-user.entity';
import { UserNotify } from './accounts/entities/user-notify.entity';
import { Address } from './accounts/entities/address.entity';
import { PaymentMethod } from './orders/entities/payment-method.entity';
import { ProductImage } from './products/entities/product-image.entity';
import { ProductVariant } from './products/entities/product-variant.entity';
import { ProductOfCart } from './products/entities/product-of-cart.entity';
import { DeliveryCenter } from './orders/entities/delivery-center.entity';
import { OrderProcess } from './orders/entities/order-process.entity';
import { OrderPaymentInfo } from './orders/entities/order-payment-info.entity';
import { Variant } from './products/entities/variant.entity';
import { Order } from './orders/entities/order.entity';
import { VariantValue } from './products/entities/variant-value.entity';
import { ProductVariantDetails } from './products/entities/product-variant-detail.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // load: [configuration],
    }), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: new ConfigService().get('PGHOST'),
      // port: new ConfigService().get('PGPORT'),
      // username: new ConfigService().get('PGUSER'),
      // password: new ConfigService().get('PGPASSWOR'),
      // database: new ConfigService().get('PGDATABASE'),
      entities: [Account, VerifyEmail, Slider, Shop, HistoryLogin, Client, Ward, District, City, ShopNotify, Category,
        Product, FollowerOfShop, FavouriteProduct, Cart, HistorySearch, FollowerOfUser, UserNotify, Address, PaymentMethod,
        ProductOfCategory, ProductImage, ProductVariant, ProductOfCart, DeliveryCenter, OrderProcess, OrderPaymentInfo, 
        Variant, Order, VariantValue, ProductVariantDetails
      ],
      // autoLoadEntities: true,
      // "entities": [
      //   __dirname + "entities/**/*.entity.ts"
      // ],
      synchronize: false,
    }),
    ProductsModule
  ],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
