import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, DeleteDateColumn } from 'typeorm';

@Entity('metodos_pago')
export class MetodosPago {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'id_pedido' })
    idPedido: number;

    @Column({ type: 'varchar', length: 20 })
    tipo: number;

    @Column({ type: 'varchar', length: 50 })
    estado: string;

    @Column({ type: 'varchar', length: 50 })
    monto: string;

    @DeleteDateColumn({
        type: 'timestamp',
        name: 'fecha_eliminacion',
        select: false,
      })
      deletedAt?: Date;

    @ManyToOne(() => Pedido, (pedido) => pedido.metodosPago)
    pedido: Pedido;
}
