import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Favorite } from './Favorite'
import { Product } from './Product';

@Entity("users")
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {

    if (!this.id) this.id = uuid()
  }

}

export { User }