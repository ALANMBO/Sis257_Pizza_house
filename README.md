<p>"Sis257_Pizza_House" es una pizzería innovadora que se dedica a ofrecer una experiencia única de pizza, combinando sabores tradicionales y nuevas propuestas culinarias, utilizando siempre ingredientes frescos y de alta calidad. La pizzería está comprometida con ofrecer un servicio rápido y eficiente de pedidos y entregas, brindando una experiencia gastronómica inolvidable. Además, cuenta con promociones especiales y descuentos para premiar la lealtad de sus clientes.</p>

<p>El sistema web "Sis257_Pizza_House" está diseñado para optimizar la gestión interna de la pizzería, permitiendo administrar productos (pizzas y otros), ingredientes, pedidos de clientes, métodos de pago y promociones activas. Los empleados pueden gestionar los pedidos de manera eficiente, mientras que los clientes pueden realizar pedidos en línea de manera sencilla y rápida.</p>

<ul>
  <li>categorias
    <ul>
      <li>id: Identificador único de la categoría.</li>
      <li>nombre: Nombre de la categoría.</li>
      <li>fecha_creacion: Fecha en la que se creó la categoría.</li>
      <li>fecha_modificacion: Fecha de la última modificación de la categoría.</li>
    </ul>
  </li>

  <li>clientes
    <ul>
      <li>id: Identificador único del cliente.</li>
      <li>nombres: Nombres del cliente.</li>
      <li>apellidos: Apellidos del cliente.</li>
      <li>direccion: Dirección del cliente.</li>
      <li>celular: Número de celular del cliente.</li>
      <li>fecha_creacion: Fecha en la que se creó el cliente.</li>
      <li>fecha_modificacion: Fecha de la última modificación del cliente.</li>
    </ul>
  </li>

  <li>empleados
    <ul>
      <li>id: Identificador único del empleado.</li>
      <li>nombres: Nombres del empleado.</li>
      <li>apellidos: Apellidos del empleado.</li>
      <li>cargo: Cargo que ocupa el empleado.</li>
      <li>salario: Salario del empleado.</li>
      <li>fecha_contratacion: Fecha en la que se contrató al empleado.</li>
      <li>fecha_creacion: Fecha en la que se creó el registro del empleado.</li>
      <li>fecha_modificacion: Fecha de la última modificación del registro del empleado.</li>
      <li>id_usuario: Identificador del usuario relacionado con el empleado.</li>
    </ul>
  </li>

  <li>productos
    <ul>
      <li>id: Identificador único del producto.</li>
      <li>nombre: Nombre del producto.</li>
      <li>descripcion: Descripción del producto.</li>
      <li>precio_unitario: Precio unitario del producto.</li>
      <li>stock: Cantidad disponible del producto.</li>
      <li>fecha_creacion: Fecha en la que se creó el producto.</li>
      <li>fecha_modificacion: Fecha de la última modificación del producto.</li>
      <li>idCategoria: Identificador de la categoría a la que pertenece el producto.</li>
    </ul>
  </li>

  <li>usuarios
    <ul>
      <li>id: Identificador único del usuario.</li>
      <li>nombre_usuario: Nombre de usuario.</li>
      <li>clave: Contraseña del usuario.</li>
      <li>fecha_creacion: Fecha en la que se creó el usuario.</li>
      <li>fecha_modificacion: Fecha de la última modificación del usuario.</li>
    </ul>
  </li>

  <li>ventadetalles
    <ul>
      <li>id: Identificador único del detalle de la venta.</li>
      <li>cantidad: Cantidad de productos vendidos.</li>
      <li>subtotal: Subtotal correspondiente a los productos.</li>
      <li>id_venta: Identificador de la venta asociada.</li>
      <li>id_producto: Identificador del producto vendido.</li>
    </ul>
  </li>

  <li>ventas
    <ul>
      <li>id: Identificador único de la venta.</li>
      <li>cantidad: Cantidad total de productos en la venta.</li>
      <li>precio_unitario: Precio unitario de los productos vendidos.</li>
      <li>total_venta: Total de la venta.</li>
      <li>fecha_creacion: Fecha en la que se realizó la venta.</li>
      <li>idCliente: Identificador del cliente asociado a la venta.</li>
      <li>id_producto: Identificador del producto asociado a la venta.</li>
      <li>id_Empleado: Identificador del empleado que realizó la venta.</li>
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

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
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
