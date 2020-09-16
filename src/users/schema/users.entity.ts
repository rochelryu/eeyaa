import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	JoinColumn,
	ManyToOne,
} from 'typeorm';

import { CompetencesEntity } from 'src/competences/schema/competences.entity';

@Entity()
export class UsersEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 25 })
	name: string;

	@Column({ length: 110 })
	firstname: string;

	@Column({ length: 50 })
	pseudo: string;

	@Column({ length: 50 })
	numero: string;

	@Column({ length: 255 })
	password: string;

	@Column({ length: 50 })
	email: string;

	@Column() birthDate: Date;

	@Column({ length: 50 })
	nationnalite: string;

	@Column({ length: 50 })
	numberPiece: string;

	@Column()
	namePiece: string;

	@Column({ length: 25 })
	recovery: string;

	@Column({ type: "int" })
	competences_id: number;

	@ManyToOne(() => CompetencesEntity, (competences) => competences.users)
	@JoinColumn({ name: 'competences_id' })
	competences: CompetencesEntity;

	@Column({ default: true })
	isActive: boolean;

	@Column({ default: true })
	isWelcome: boolean;


	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;

}
