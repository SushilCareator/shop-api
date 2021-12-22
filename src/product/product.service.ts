import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Between, ILike, Like, Repository } from "typeorm";
import {
    uniqueNamesGenerator,
    adjectives,
    colors,
    names,
} from "unique-names-generator";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) {}
    create(createProductDto: CreateProductDto) {
        return this.productRepository.save({
            name: createProductDto.name,
            image: createProductDto.image,
        });
    }

    findAllpa(
        page: number,
        size: number,
        minPrice: number,
        maxPrice: number,
        searchData: string
    ) {
        console.log("allpa");

        return this.productRepository.find({
            // where: `salePrice Between(${minPrice}, ${maxPrice}) AND name ILIKE(%${searchData}%) OR productId ILIKE(%${searchData}%)`,
            where: [
                {
                    name: ILike(`%${searchData}%`),
                    salePrice: Between(minPrice, maxPrice),
                },
                {
                    productId: ILike(`%${searchData}%`),
                    salePrice: Between(minPrice, maxPrice),
                },
            ],

            order: { salePrice: "ASC" },

            // take: size,
            // skip: (page - 1) * size,
        });
        // .then((res) => ({
        //     totalItems: res[1],
        //     data: res[0],
        //     currentPage: page,
        //     totalPages: Math.ceil(res[1] / size),
        // }));
    }

    findAllpd(
        page: number,
        size: number,
        minPrice: number,
        maxPrice: number,
        searchData: string
    ) {
        console.log("allpd");

        return this.productRepository.find({
            where: [
                {
                    name: ILike(`%${searchData}%`),
                    salePrice: Between(minPrice, maxPrice),
                },
                {
                    productId: ILike(`%${searchData}%`),
                    salePrice: Between(minPrice, maxPrice),
                },
            ],
            order: { salePrice: "DESC" },

            // take: size,
            // skip: (page - 1) * size,
        });
        // .then((res) => ({
        //     totalItems: res[1],
        //     data: res[0],
        //     currentPage: page,
        //     totalPages: Math.ceil(res[1] / size),
        // }));
    }

    findAllna(
        page: number,
        size: number,
        minPrice: number,
        maxPrice: number,
        searchData: string
    ) {
        console.log("allna");

        return this.productRepository.find({
            where: [
                {
                    name: ILike(`%${searchData}%`),
                    salePrice: Between(minPrice, maxPrice),
                },
                {
                    productId: ILike(`%${searchData}%`),
                    salePrice: Between(minPrice, maxPrice),
                },
            ],
            order: { name: "ASC" },

            // take: size,
            // skip: (page - 1) * size,
        });
        // .then((res) => ({
        //     totalItems: res[1],
        //     data: res[0],
        //     currentPage: page,
        //     totalPages: Math.ceil(res[1] / size),
        // }));
    }

    findAllnd(
        page: number,
        size: number,
        minPrice: number,
        maxPrice: number,
        searchData: string
    ) {
        console.log("allnd");

        return this.productRepository.find({
            where: [
                {
                    name: ILike(`%${searchData}%`),
                    salePrice: Between(minPrice, maxPrice),
                },
                {
                    productId: ILike(`%${searchData}%`),
                    salePrice: Between(minPrice, maxPrice),
                },
            ],
            order: { name: "DESC" },

            // take: size,
            // skip: (page - 1) * size,
        });
        // .then((res) => ({
        //     totalItems: res[1],
        //     data: res[0],
        //     currentPage: page,
        //     totalPages: Math.ceil(res[1] / size),
        // }));
    }

    findAll(
        page: number,
        size: number,
        minPrice: number,
        maxPrice: number,
        searchData: string
    ) {
        console.log("all");
        return this.productRepository.find({
            where: [
                {
                    name: ILike(`%${searchData}%`),
                    salePrice: Between(minPrice, maxPrice),
                },
                {
                    productId: ILike(`%${searchData}%`),
                    salePrice: Between(minPrice, maxPrice),
                },
            ],

            // order: { sortBy: "ASC" },
            // order: { createdAt: "ASC" },

            // take: size,
            // skip: (page - 1) * size,
        });
    }

    findByQuery(query: string) {
        return this.productRepository
            .findAndCount({
                where: { name: Like(`%${query}%`) },
                order: { id: "ASC" },
            })
            .then((d) => ({ totalItems: d[1], data: d[0] }));
    }

    findOne(id: number) {
        return this.productRepository.findOne(id).then((data) => {
            if (!data) throw new NotFoundException(); //throw new HttpException({}, 204);
            return data;
        });
    }

    update(id: number, updateProductDto: UpdateProductDto) {
        return this.productRepository.update(
            { id: id },
            {
                name: updateProductDto.name,
                image: updateProductDto.image,
            }
        );
    }

    remove(id: number) {
        return this.productRepository.delete({ id: id });
    }

    bulkCreate() {
        return this.productRepository.insert({});
    }
}
