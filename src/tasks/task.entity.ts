/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  // eslint-disable-next-line prettier/prettier
  @ManyToOne(type => User, user => user.tasks, { eager: false })
  user: User;

  @Column()
  userId: number;
}
