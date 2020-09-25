import {
  Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	OneToMany
} from 'typeorm';

import { ProjectsEntity } from 'src/projects/schema/projects.entity';

@Entity()
export class EtatEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 25 })
  name: string;

  @OneToMany(() => ProjectsEntity, (projects) => projects.etat_id)
  projects: ProjectsEntity[];
  
  @CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;

	// @Column({default: null}) endContratTime: Date;
	// @Column({default: null}) validEntryInSysteme: Date;
	// @Column({default: null}) dateRetry: Date;
}
