<p>"Sis257_Pizza_House" es una pizzería innovadora que se especializa en ofrecer una amplia variedad de pizzas deliciosas, preparadas con ingredientes frescos y de alta calidad. El objetivo principal de este negocio es ofrecer a los clientes una experiencia gastronómica única, combinando sabores tradicionales con nuevas propuestas culinarias, además de brindar un servicio de pedidos y entregas rápido y eficiente. La pizzería también ofrece promociones exclusivas y descuentos para fidelizar a sus clientes.</p>

<p>El sistema web "Sis257_Pizza_House" permitirá gestionar de manera eficiente las operaciones internas, como la administración de productos (pizzas y otros), ingredientes, pedidos de clientes, métodos de pago, y las promociones vigentes. Los empleados podrán gestionar pedidos, y los clientes podrán hacer sus pedidos en línea de forma fácil y rápida.</p>


<ul>
  <li>Clientes
    <ul>
      <li>id_cliente: Identificador único del cliente.</li>
      <li>razon_social: Nombre completo o razón social del cliente.</li>
      <li>nit: Número de Identificación Tributaria.</li>
      <li>telefono: Número de teléfono del cliente.</li>
      <li>email: Correo electrónico del cliente.</li>
      <li>direccion: Dirección de entrega del cliente.</li>
    </ul>
  </li>

  <li>Empleados
    <ul>
      <li>id_empleado: Identificador único del empleado.</li>
      <li>nombre: Nombre completo del empleado.</li>
      <li>cargo: Cargo que ocupa en la pizzería (por ejemplo, repartidor, cajero).</li>
      <li>telefono: Número de teléfono del empleado.</li>
      <li>email: Correo electrónico del empleado.</li>
      <li>salario: Salario del empleado.</li>
      <li>fecha_nacimiento: Fecha de nacimiento del empleado.</li>
    </ul>
  </li>

  <li>Productos (Pizzas)
    <ul>
      <li>id_producto: Identificador único del producto.</li>
      <li>nombre: Nombre de la pizza o producto.</li>
      <li>precio: Precio del producto.</li>
      <li>id_categoria: Categoría a la que pertenece (por ejemplo, pizza, bebida).</li>
      <li>disponibilidad: Indica si el producto está disponible.</li>
      <li>tamanio: Tamaño del producto (mediano, grande, etc.).</li>
    </ul>
  </li>

  <li>Categorias de Productos
    <ul>
      <li>id_categoria: Identificador único de la categoría.</li>
      <li>nombre: Nombre de la categoría (por ejemplo, Pizzas, Bebidas, Complementos).</li>
    </ul>
  </li>

  <li>Pedidos
    <ul>
      <li>id_pedido: Identificador único del pedido.</li>
      <li>id_cliente: Cliente que hizo el pedido.</li>
      <li>id_empleado: Empleado que atendió o entregó el pedido.</li>
      <li>fecha: Fecha en que se realizó el pedido.</li>
      <li>estado: Estado del pedido (pendiente, entregado, cancelado).</li>
      <li>total: Total a pagar del pedido.</li>
      <li>id_promocion: Promoción aplicada al pedido, si existe.</li>
      <li>direccion_entrega: Dirección de entrega del pedido.</li>
    </ul>
  </li>

  <li>Detalles de Pedidos
    <ul>
      <li>id_detalle: Identificador único del detalle.</li>
      <li>id_pedido: Pedido al que pertenece el detalle.</li>
      <li>id_producto: Producto seleccionado en el pedido.</li>
      <li>cantidad: Cantidad del producto pedido.</li>
      <li>precio_unitario: Precio por unidad del producto.</li>
      <li>descuento: Descuento aplicado, si corresponde.</li>
    </ul>
  </li>

  <li>Ingredientes
    <ul>
      <li>id_ingrediente: Identificador único del ingrediente.</li>
      <li>nombre: Nombre del ingrediente (queso, pepperoni, etc.).</li>
      <li>precio: Precio adicional, si se cobra por ingrediente extra.</li>
    </ul>
  </li>

  <li>Productos-Ingredientes (Relación N a M)
    <ul>
      <li>id_producto_ingrediente: Identificador único de la relación.</li>
      <li>id_producto: Producto al que pertenece el ingrediente.</li>
      <li>id_ingrediente: Ingrediente relacionado con el producto.</li>
    </ul>
  </li>

  <li>Métodos de Pago
    <ul>
      <li>id_metodo_pago: Identificador único del método de pago.</li>
      <li>id_pedido: Pedido asociado al pago.</li>
      <li>tipo: Tipo de pago (tarjeta, efectivo, transferencia).</li>
      <li>monto: Monto pagado.</li>
      <li>estado: Estado del pago (pagado, pendiente, rechazado).</li>
    </ul>
  </li>

  <li>Promociones
    <ul>
      <li>id_promocion: Identificador único de la promoción.</li>
      <li>descripcion_promocion: Descripción de la promoción.</li>
      <li>descuento_porcentaje: Porcentaje de descuento aplicado.</li>
      <li>fecha_inicio: Fecha de inicio de la promoción.</li>
      <li>fecha_fin: Fecha de fin de la promoción.</li>
    </ul>
  </li>
</ul>




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
