import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "products" })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, unique: true })
    productId: string;

    @Column({ nullable: false })
    name: string;

    @Column({ type: "decimal" })
    price: number;

    @Column({ nullable: false })
    image: string;

    @Column({ type: "decimal" })
    salePrice: number;

    @Column({ nullable: false })
    productStock: number;

    @Column({ nullable: false })
    category: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    rating: string;

    @Column({ nullable: true })
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date;
}
