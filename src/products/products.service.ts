import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
    getProductInformationsById(id: number) {
        return "Product by id";
    }
}