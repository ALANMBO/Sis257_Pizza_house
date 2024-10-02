"Sis257_Pizza_House" es una pizzería innovadora que se especializa en ofrecer una amplia variedad de pizzas deliciosas, preparadas con ingredientes frescos y de alta calidad. El objetivo principal de este negocio es ofrecer a los clientes una experiencia gastronómica única, combinando sabores tradicionales con nuevas propuestas culinarias, además de brindar un servicio de pedidos y entregas rápido y eficiente. La pizzería también ofrece promociones exclusivas y descuentos para fidelizar a sus clientes.

El sistema web que estás desarrollando para "Sis257_Pizza_House" permitirá gestionar de manera eficiente las operaciones internas, como la administración de productos (pizzas y otros), ingredientes, pedidos de clientes, métodos de pago, y las promociones vigentes. Los empleados podrán gestionar pedidos, y los clientes podrán hacer sus pedidos en línea de forma fácil y rápida.

1. Clientes
id_cliente: Identificador único del cliente.
razon_social: Nombre completo o razón social del cliente.
nit: Número de Identificación Tributaria.
telefono: Número de teléfono del cliente.
email: Correo electrónico del cliente.
direccion: Dirección de entrega del cliente.
2. Empleados
id_empleado: Identificador único del empleado.
nombre: Nombre completo del empleado.
cargo: Cargo que ocupa en la pizzería (por ejemplo, repartidor, cajero).
telefono: Número de teléfono del empleado.
email: Correo electrónico del empleado.
salario: Salario del empleado.
fecha_nacimiento: Fecha de nacimiento del empleado.
3. Productos (Pizzas)
id_producto: Identificador único del producto.
nombre: Nombre de la pizza o producto.
precio: Precio del producto.
id_categoria: Categoría a la que pertenece (por ejemplo, pizza, bebida).
disponibilidad: Indica si el producto está disponible.
tamanio: Tamaño del producto (mediano, grande, etc.).
4. Categorias de Productos
id_categoria: Identificador único de la categoría.
nombre: Nombre de la categoría (por ejemplo, Pizzas, Bebidas, Complementos).
5. Pedidos
id_pedido: Identificador único del pedido.
id_cliente: Cliente que hizo el pedido.
id_empleado: Empleado que atendió o entregó el pedido.
fecha: Fecha en que se realizó el pedido.
estado: Estado del pedido (pendiente, entregado, cancelado).
total: Total a pagar del pedido.
id_promocion: Promoción aplicada al pedido, si existe.
direccion_entrega: Dirección de entrega del pedido.
6. Detalles de Pedidos
id_detalle: Identificador único del detalle.
id_pedido: Pedido al que pertenece el detalle.
id_producto: Producto seleccionado en el pedido.
cantidad: Cantidad del producto pedido.
precio_unitario: Precio por unidad del producto.
descuento: Descuento aplicado, si corresponde.
7. Ingredientes
id_ingrediente: Identificador único del ingrediente.
nombre: Nombre del ingrediente (queso, pepperoni, etc.).
precio: Precio adicional, si se cobra por ingrediente extra.
8. Productos-Ingredientes (Relación N a M)
id_producto_ingrediente: Identificador único de la relación.
id_producto: Producto al que pertenece el ingrediente.
id_ingrediente: Ingrediente relacionado con el producto.
9. Métodos de Pago
id_metodo_pago: Identificador único del método de pago.
id_pedido: Pedido asociado al pago.
tipo: Tipo de pago (tarjeta, efectivo, transferencia).
monto: Monto pagado.
estado: Estado del pago (pagado, pendiente, rechazado).
10. Promociones
id_promocion: Identificador único de la promoción.
descripcion_promocion: Descripción de la promoción.
descuento_porcentaje: Porcentaje de descuento aplicado.
fecha_inicio: Fecha de inicio de la promoción.
fecha_fin: Fecha de fin de la promoción.




<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
