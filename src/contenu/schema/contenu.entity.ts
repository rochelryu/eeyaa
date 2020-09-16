import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	ManyToOne
} from 'typeorm';

import { SectionEntity } from '../../section/schema/section.entity'
@Entity()
export class ContenuEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 25 })
	name: string;

	@ManyToOne(type => SectionEntity, section => section.contenus)
	section_id: SectionEntity;

	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;

	// @Column({default: null}) endContratTime: Date;
	// @Column({default: null}) validEntryInSysteme: Date;
	// @Column({default: null}) dateRetry: Date;
}
