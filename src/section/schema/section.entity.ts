import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";

import { FormationEntity } from "../../formation/schema/formation.entity";
import { ContenuEntity } from "../../contenu/schema/contenu.entity";

@Entity()
export class SectionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  title: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "int" })
  formation_id: number;

  @ManyToOne((type) => FormationEntity, (formation) => formation.sections)
  @JoinColumn({ name: "formation_id" })
  formation: FormationEntity;

  @OneToMany((type) => ContenuEntity, (contenu) => contenu.section_id)
  contenus: ContenuEntity[];
}
