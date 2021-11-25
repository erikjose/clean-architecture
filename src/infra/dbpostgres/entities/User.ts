import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { PgProfile } from './Profile'

@Entity({ name: 'users' })
export class PgUser {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: 'name' })
  name!: string

  @Column()
  email!: string

  @Column({ name: 'initials' })
  initials!: string

  @Column({ nullable: true })
  profileId?: number

  @OneToOne(() => PgProfile, profile => profile.user, { cascade: true })
  @JoinColumn()
  profile?: PgProfile
}
