"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("typeorm");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    create(createProductDto) {
        return this.productRepository.save({
            name: createProductDto.name,
            image: createProductDto.image,
        });
    }
    findAllpa(page, size, minPrice, maxPrice, searchData) {
        console.log("allpa");
        return this.productRepository.find({
            where: [
                {
                    name: typeorm_2.ILike(`%${searchData}%`),
                    salePrice: typeorm_2.Between(minPrice, maxPrice),
                },
                {
                    productId: typeorm_2.ILike(`%${searchData}%`),
                    salePrice: typeorm_2.Between(minPrice, maxPrice),
                },
            ],
            order: { salePrice: "ASC" },
        });
    }
    findAllpd(page, size, minPrice, maxPrice, searchData) {
        console.log("allpd");
        return this.productRepository.find({
            where: [
                {
                    name: typeorm_2.ILike(`%${searchData}%`),
                    salePrice: typeorm_2.Between(minPrice, maxPrice),
                },
                {
                    productId: typeorm_2.ILike(`%${searchData}%`),
                    salePrice: typeorm_2.Between(minPrice, maxPrice),
                },
            ],
            order: { salePrice: "DESC" },
        });
    }
    findAllna(page, size, minPrice, maxPrice, searchData) {
        console.log("allna");
        return this.productRepository.find({
            where: [
                {
                    name: typeorm_2.ILike(`%${searchData}%`),
                    salePrice: typeorm_2.Between(minPrice, maxPrice),
                },
                {
                    productId: typeorm_2.ILike(`%${searchData}%`),
                    salePrice: typeorm_2.Between(minPrice, maxPrice),
                },
            ],
            order: { name: "ASC" },
        });
    }
    findAllnd(page, size, minPrice, maxPrice, searchData) {
        console.log("allnd");
        return this.productRepository.find({
            where: [
                {
                    name: typeorm_2.ILike(`%${searchData}%`),
                    salePrice: typeorm_2.Between(minPrice, maxPrice),
                },
                {
                    productId: typeorm_2.ILike(`%${searchData}%`),
                    salePrice: typeorm_2.Between(minPrice, maxPrice),
                },
            ],
            order: { name: "DESC" },
        });
    }
    findAll(page, size, minPrice, maxPrice, searchData) {
        console.log("all");
        return this.productRepository.find({
            where: [
                {
                    name: typeorm_2.ILike(`%${searchData}%`),
                    salePrice: typeorm_2.Between(minPrice, maxPrice),
                },
                {
                    productId: typeorm_2.ILike(`%${searchData}%`),
                    salePrice: typeorm_2.Between(minPrice, maxPrice),
                },
            ],
        });
    }
    findByQuery(query) {
        return this.productRepository
            .findAndCount({
            where: { name: typeorm_2.Like(`%${query}%`) },
            order: { id: "ASC" },
        })
            .then((d) => ({ totalItems: d[1], data: d[0] }));
    }
    findOne(id) {
        return this.productRepository.findOne(id).then((data) => {
            if (!data)
                throw new common_1.NotFoundException();
            return data;
        });
    }
    update(id, updateProductDto) {
        return this.productRepository.update({ id: id }, {
            name: updateProductDto.name,
            image: updateProductDto.image,
        });
    }
    remove(id) {
        return this.productRepository.delete({ id: id });
    }
    bulkCreate() {
        return this.productRepository.insert({});
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map