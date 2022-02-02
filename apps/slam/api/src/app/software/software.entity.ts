/** @format */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Software {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('date')
  renewal_date: Date;

  @Column('money')
  cost: number;

  @Column()
  billing_cycle: string;

  @Column()
  administrator: string;

  @Column('int')
  quantity: number;

  @Column('boolean', { default: true })
  active: boolean;
}
