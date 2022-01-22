import { BaseEntity, EntityTarget, Repository } from "typeorm";
import { RepositoryInterface } from "./repository.interface";

export interface DataProviderInterface {
   connect(): Promise<void>;

   disconnect(): Promise<void>;

   getRepository<TEntity extends BaseEntity>(entity: new () => TEntity): Repository<TEntity>;
}
