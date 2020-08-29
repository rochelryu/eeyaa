import { ProjectsEntity } from 'src/projects/schema/projects.entity';
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
export class ClientsEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 25 })
	nameEntreprise: string;

	@Column()
  address: string;

	@Column()
	registCommerce: string;

	@Column()
  describe: string;

  @Column()
	name: string;
  
  @Column({ length: 255 })
  password: string;

  @Column({ length: 50 })
  email: string;
  
  @Column()
  birthDate: Date;

  @Column({ length: 50 })
  fonctions: string;

  @Column()
  logo: string;

  @Column()
  namePiece: string;

	@Column({ length: 25 })
	recovery: string;

	@Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isWelcome: boolean;


  @OneToMany(() => ProjectsEntity, (projects) => projects.clients)
	projects: ProjectsEntity[];
	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;

}
