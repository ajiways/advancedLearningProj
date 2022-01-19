import { BaseEntity } from "typeorm";

export interface RepositoryInterface<TEntity extends BaseEntity> {
   findAll(): Promise<TEntity[]>;

   findOne(id: string): Promise<TEntity>;

   delete(id: string): Promise<void>;

   create(entity: BaseEntity): Promise<void>;
}
