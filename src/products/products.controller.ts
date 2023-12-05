
import { Controller, Get, Param } from "@nestjs/common/decorators";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get('id/:id')
    async getProductInformationsById(@Param() id: number) {
        return this.productsService.findAll();
    }
}