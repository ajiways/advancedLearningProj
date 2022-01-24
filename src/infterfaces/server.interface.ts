import express, { NextFunction, RequestHandler } from "express";
import { Connection } from "typeorm";
import { RequestInterface } from "./request.interface";

export type THandler = (request: RequestInterface, response: express.Response) => unknown;
export type middlewaresArray = Array<RequestHandler>;

export enum EMethod {
   GET = "GET",
   POST = "POST",
   PUT = "PUT",
   DELETE = "DELETE",
}

export interface ServerInterface {
   connect(): Promise<void>;

   disconnect(): Promise<void>;

   migrate(): Promise<void>;

   addRouter(route: string, router: express.Router): void;

   addMiddleware(middleware: RequestHandler): void;

   connectToDb(): Promise<void>;

   getDBConnection(): Connection;

   addHandler(method: EMethod, route: string, handler: THandler, middlewares?: middlewaresArray): void;

   addPageHandler(route: string, pageName: string): void;
}
