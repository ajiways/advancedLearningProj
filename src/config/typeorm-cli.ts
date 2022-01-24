import { getOrmConfig } from "./typeorm";

export default [
   {
      name: "migrations:generate",
      ...getOrmConfig(),
      entities: [`src/entities/**/*.entity{.js,.ts}`],
   },
   {
      name: "migrations:create-run-revert",
      ...getOrmConfig(),
      migrations: [`src/migrations/**/*{.js,.ts}`],
   },
];
