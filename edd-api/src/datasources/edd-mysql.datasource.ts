import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './edd-mysql.datasource.json';

export class EddMysqlDataSource extends juggler.DataSource {
  static dataSourceName = 'eddMYSQL';

  constructor(
    @inject('datasources.config.eddMYSQL', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
