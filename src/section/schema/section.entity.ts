import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	ManyToOne,
	OneToMany
} from 'typeorm'

import { FormationEntity } from '../../formation/schema/formation.entity';
import { ContenuEntity } from '../../contenu/schema/contenu.entity'
@Entity()
export class SectionEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 25 })
	name_movie: string;

	@Column()
	attach_files: string;

	@Column()
	content_text: string;

	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;

	@ManyToOne(type => FormationEntity, formation => formation.sections)
	formation: FormationEntity

	@OneToMany(type => ContenuEntity, contenu => contenu.section_id)
	contenus: ContenuEntity[];

}
