import { BaseEntity, Repository } from "typeorm";

export interface DataProviderInterface {
   connect(): Promise<void>;

   disconnect(): Promise<void>;

   getRepository<TEntity extends BaseEntity>(entity: new () => TEntity): Repository<TEntity>;
}
