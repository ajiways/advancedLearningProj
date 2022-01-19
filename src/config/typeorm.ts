import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { configService } from "../services/config.service";

export function getOrmConfig(): PostgresConnectionOptions {
   return {
      type: "postgres",
      host: configService.dbHost,
      port: configService.dbPort,
      username: configService.dbUser,
      password: configService.dbPassword,
      database: configService.dbName,
      namingStrategy: new SnakeNamingStrategy(),
      entities: ["entities/*.entity{.js,.ts}"],
      synchronize: false,
      migrations: ["migrations/**/*{.js,.ts}"],
      migrationsTableName: "migrations",
      logging: "all",
      cli: {
         migrationsDir: "migrations",
      },
   };
}
