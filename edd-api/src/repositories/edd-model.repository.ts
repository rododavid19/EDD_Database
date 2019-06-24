import {DefaultCrudRepository} from '@loopback/repository';
import {EddModel, EddModelRelations} from '../models';
import {EddMysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EddModelRepository extends DefaultCrudRepository<
  EddModel,
  typeof EddModel.prototype.serial,
  EddModelRelations
> {
  constructor(
    @inject('datasources.eddMYSQL') dataSource: EddMysqlDataSource,
  ) {
    super(EddModel, dataSource);
  }
}
