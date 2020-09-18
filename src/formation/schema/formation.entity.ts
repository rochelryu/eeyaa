import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";

import { SectionEntity } from "../../section/schema/section.entity";

@Entity()
export class FormationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  title: string;

  @Column()
  picture: string;

  @Column({ type: "text" })
  description: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany((type) => SectionEntity, (section) => section.formation)
  sections: SectionEntity[];
}
