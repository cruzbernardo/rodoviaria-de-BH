import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Assento } from './AssentoEntity';
import { Companhia } from './CompanhiaEntity';
@Entity()
export class Viagem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origem: string;

  @Column()
  destino: string;

  @Column()
  data: Date;

  @ManyToOne(() => Companhia, (companhia) => companhia.viagens, {
    cascade: true,
  })
  companhia: Companhia;

  @OneToMany(() => Assento, (assento) => assento.viagem, { cascade: true })
  assentos: Assento[];
}
