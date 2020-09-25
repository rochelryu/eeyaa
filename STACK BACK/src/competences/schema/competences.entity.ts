import { UsersEntity } from 'src/users/schema/users.entity';
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	OneToMany
} from 'typeorm';

@Entity()
export class CompetencesEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 25 })
  name: string;
  
  @OneToMany(() => UsersEntity, (users) => users.competences_id)
	users: UsersEntity[];

  @CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;

	// @Column({default: null}) endContratTime: Date;
	// @Column({default: null}) validEntryInSysteme: Date;
	// @Column({default: null}) dateRetry: Date;
}
