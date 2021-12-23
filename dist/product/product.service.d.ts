import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<{
        name: string;
        image: string;
    } & Product>;
    findAllpa(page: number, size: number, minPrice: number, maxPrice: number, searchData: string): Promise<Product[]>;
    findAllpd(page: number, size: number, minPrice: number, maxPrice: number, searchData: string): Promise<Product[]>;
    findAllna(page: number, size: number, minPrice: number, maxPrice: number, searchData: string): Promise<Product[]>;
    findAllnd(page: number, size: number, minPrice: number, maxPrice: number, searchData: string): Promise<Product[]>;
    findAll(page: number, size: number, minPrice: number, maxPrice: number, searchData: string): Promise<Product[]>;
    findByQuery(query: string): Promise<{
        totalItems: number;
        data: Product[];
    }>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    bulkCreate(): Promise<import("typeorm").InsertResult>;
}
