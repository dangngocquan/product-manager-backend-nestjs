import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsController } from './accounts/accounts.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
})
export class AppModule {}
