import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    unique: false,
    nullable: false,
    length: 255,
  })
  name: string;

  @Column('varchar', {
    unique: true,
    nullable: false,
    length: 255,
  })
  email: string;

  @Column('varchar', {
    unique: false,
    nullable: false,
    length: 50,
  })
  phone: string;

  @Column('varchar', {
    unique: false,
    nullable: false,
    length: 255,
  })
  address: string;

  @Column('varchar', {
    unique: false,
    nullable: false,
    length: 50,
  })
  city: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
