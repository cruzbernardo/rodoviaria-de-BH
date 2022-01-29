import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Companhia } from './CompanhiaEntity';
import { Assento } from './AssentoEntity';

export enum ROLE {
  Admin = 'admin',
  passageiro = 'passageiro',
  Funcionario = 'funcionario',
}

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column({ type: 'enum', enum: ROLE })
  role: ROLE;

  @ManyToOne(() => Companhia, (companhia) => companhia.funcionarios, {
    nullable: true,
  })
  companhia: Companhia;

  @OneToMany(() => Assento, (assento) => assento.usuario)
  assentos: Assento[];
}
