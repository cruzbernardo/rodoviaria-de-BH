import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './UsuarioEntity';
import { Viagem } from './ViagemEntity';

@Entity()
export class Companhia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Viagem, (viagem) => viagem.companhia)
  viagens: Viagem[];

  @OneToMany(() => Usuario, (usuario) => usuario.companhia)
  funcionarios: Usuario[];
}
