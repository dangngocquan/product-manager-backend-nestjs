import { Injectable, Inject} from "@nestjs/common";
import { InjectRepository, InjectEntityManager, InjectDataSource } from '@nestjs/typeorm';
import { Repository, EntityManager, DataSource } from 'typeorm';
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsResponsitory: Repository<Product>,
    ) {}

    // getProductInformationsById(id: number) {
    //     // return this.productRepository.find();
    // }

    async findAll() {
        console.log("ABCDE");
        return this.productsResponsitory.find({

        });
    }

}   