/** @format */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Software {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  Name: string;

  @Column('date')
  Renewal_Date: Date;

  @Column('money')
  Cost: number;

  @Column()
  Billing_Cycle: string;

  @Column()
  Administrator: string;

  @Column('int')
  Quantity: number;

  @Column('boolean', { default: true })
  Active: boolean;
}
