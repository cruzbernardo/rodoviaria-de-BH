import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './UsuarioEntity';
import { Viagem } from './ViagemEntity';
@Entity()
export class Assento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: number;

  @Column({ default: true })
  disponivel: boolean;

  @ManyToOne(() => Viagem, (viagem) => viagem.assentos)
  viagem: Viagem;

  @ManyToOne(() => Usuario, (usuario) => usuario.assentos, { nullable: true })
  usuario: Usuario;
}
