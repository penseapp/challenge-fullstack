import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'
import { Product } from './Product'

@Entity("favorites")
class Favorite {

  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: "user_id"})
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @JoinColumn({ name: "product_id"})
  @ManyToOne(() => Product)
  product: Product;

  @Column()
  product_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {

    if (!this.id) this.id = uuid()
  }

}

export { Favorite }