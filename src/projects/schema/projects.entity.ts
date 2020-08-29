import { ClientsEntity } from 'src/clients/schema/clients.entity';
import { EtatEntity } from 'src/etat/schema/etat.entity';
import { FichiersEntity } from './fichiers.entity';
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
export class ProjectsEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

  // step 1
	@Column({ length: 25 })
	title: string;

	@Column()
  context: string;

	@Column()
	details: string;

	@Column()
  objectAttente: string;

  @Column({ type: "int" })
  clietns_id: number;

  // step 2
  @Column()
  cible: string;
  
  @Column({default: ""})
  typologie: string;

  @Column({default: ""})
  situation: string;
  
  @Column({default: ""})
  perception: string;
  
  // step 3
  @Column({default: ""})
  concurrents: string;
  
  @Column({default: ""})
  cron: string; // force et faiblesse du projet

  @Column({default: ""})
  usp: string;

  @Column({ type: "int" })
  etat_id: number;
  
  @ManyToOne(() => ClientsEntity, (competences) => competences.projects)
	@JoinColumn({ name: 'clients_id' })
  clients: ClientsEntity;

  @ManyToOne(() => EtatEntity, (competences) => competences.projects)
	@JoinColumn({ name: 'etat_id' })
  etat: EtatEntity;

  @OneToMany(() => FichiersEntity, (fichiers) => fichiers.projects_id)
  fichiers: FichiersEntity[];

	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;

}
