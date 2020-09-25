import { ProjectsEntity } from './projects.entity';
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	JoinColumn,
	ManyToOne,
	OneToMany
} from 'typeorm';

@Entity()
export class FichiersEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column()
	name: string;
  
  @Column({type: "int"})
  projects_id: number;
  
  @ManyToOne(() => ProjectsEntity, (projects) => projects.fichiers)
	@JoinColumn({ name: 'projects_id' })
  projects: ProjectsEntity;

	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;

}
