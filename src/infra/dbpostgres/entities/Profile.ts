import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { PgUser } from "./User";

@Entity()
export class PgProfile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  document!: string

  @OneToOne(() => PgUser, user => user.profile)
  user!: PgUser
}
