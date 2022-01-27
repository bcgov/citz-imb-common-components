/** @format */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Software {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {})
  UniqueID: string;

  Name: string;

  Renewal_Date: string;

  Cost: number;

  Billing_Cycle: string;

  Administrator: string;

  Quantity: number;
}
