import "reflect-metadata";
import http from "http";
import path from "path";
import express, { RequestHandler, Router } from "express";
import { Connection, createConnection } from "typeorm";
import { EMethod, ServerInterface, THandler, middlewaresArray } from "./infterfaces/server.interface";
import { getOrmConfig } from "./config/typeorm";
import { configService } from "./services/config.service";
import swaggerUI from "swagger-ui-express";
import { swaggerConfig } from "./misc/swagger.conf";
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware";
import cookieParser from "cookie-parser";

export class Server implements ServerInterface {
   private readonly app: express.Application;
   private connection: http.Server | null = null;
   private ormConnection: Connection | null = null;
   private readonly port: number;

   constructor() {
      this.port = configService.port;
      this.app = express();
      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(express.static(path.join(__dirname, "../src/static")));
      this.app.set("view engine", "ejs");
      this.app.set("views", path.join(__dirname, "../src/views"));
      this.app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerConfig));
      this.app.use(cookieParser());
   }

   connect(): Promise<void> {
      return new Promise(async (resolve) => {
         this.connection = this.app.listen(this.port, resolve);
         console.log(`Server is running on ${this.port}`);
      });
   }

   disconnect(): Promise<void> {
      return new Promise((resolve, reject) => {
         if (this.connection && this.ormConnection) {
            this.ormConnection.close();
            console.log("Connection closed");
            this.connection.close((err) => {
               if (err) {
                  reject(err);
               } else {
                  console.log("The server has been shut down");
                  resolve();
               }
            });
         }
      });
   }

   migrate(): Promise<void> {
      return new Promise(async (resolve, reject) => {
         if (this.ormConnection) {
            await this.ormConnection.runMigrations();
            resolve();
         } else {
            reject("Error");
         }
      });
   }

   addRouter(route: string, router: Router): void {
      this.app.use(route, router);
   }

   addMiddleware(middleware: RequestHandler): void {
      this.app.use(middleware);
   }

   async connectToDb(): Promise<void> {
      this.ormConnection = await createConnection(getOrmConfig());
      console.log("Postgres connected");
   }

   getDBConnection(): Connection {
      if (this.ormConnection) {
         return this.ormConnection;
      } else {
         throw new Error("No connection");
      }
   }

   addHandler(method: EMethod, route: string, handler: THandler, middlewares?: middlewaresArray): void {
      switch (method) {
         case "GET":
            if (middlewares) {
               this.app.get(route, ...middlewares, async (req, res, next) => {
                  try {
                     const result = await handler(req, res);
                     res.send(result);
                  } catch (e) {
                     errorMiddleware(e, req, res, next);
                  }
               });
            } else {
               this.app.get(route, async (req, res, next) => {
                  try {
                     const result = await handler(req, res);
                     res.send(result);
                  } catch (e) {
                     errorMiddleware(e, req, res, next);
                  }
               });
            }
            return;
         case "POST":
            if (middlewares) {
               this.app.post(route, ...middlewares, async (req, res, next) => {
                  try {
                     const result = await handler(req, res);

                     res.send(result);
                  } catch (e) {
                     errorMiddleware(e, req, res, next);
                  }
               });
            } else {
               this.app.post(route, async (req, res, next) => {
                  try {
                     const result = await handler(req, res);
                     res.send(result);
                  } catch (e) {
                     errorMiddleware(e, req, res, next);
                  }
               });
            }
            return;
         case "PUT":
            if (middlewares) {
               this.app.put(route, ...middlewares, async (req, res, next) => {
                  try {
                     const result = await handler(req, res);
                     res.send(result);
                  } catch (e) {
                     errorMiddleware(e, req, res, next);
                  }
               });
            } else {
               this.app.put(route, async (req, res, next) => {
                  try {
                     const result = await handler(req, res);
                     res.send(result);
                  } catch (e) {
                     errorMiddleware(e, req, res, next);
                  }
               });
            }
            return;
         case "DELETE":
            if (middlewares) {
               this.app.delete(route, ...middlewares, async (req, res, next) => {
                  try {
                     const result = await handler(req, res);
                     res.send(result);
                  } catch (e) {
                     errorMiddleware(e, req, res, next);
                  }
               });
            } else {
               this.app.delete(route, async (req, res, next) => {
                  try {
                     const result = await handler(req, res);
                     res.send(result);
                  } catch (e) {
                     errorMiddleware(e, req, res, next);
                  }
               });
            }
            return;
      }
   }

   addPageHandler(route: string, pageName: string): void {
      this.app.get(route, (req, res) => {
         res.render(pageName);
      });
   }
}
