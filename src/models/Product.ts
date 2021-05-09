import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    price: number;

    @Column({nullable: true})
    promo_price: number;

    @Column({nullable: true})
    status_flag: string;

    @Column({nullable: true})
    category: string;
}

export default Product;