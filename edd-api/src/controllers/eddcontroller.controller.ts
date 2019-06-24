import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {EddModel} from '../models';
import {EddModelRepository} from '../repositories';

export class EddcontrollerController {
  constructor(
    @repository(EddModelRepository)
    public eddModelRepository : EddModelRepository,
  ) {}

  @post('/edd-models', {
    responses: {
      '200': {
        description: 'EddModel model instance',
        content: {'application/json': {schema: {'x-ts-type': EddModel}}},
      },
    },
  })
  async create(@requestBody() eddModel: EddModel): Promise<EddModel> {
    return await this.eddModelRepository.create(eddModel);
  }

  @get('/edd-models/count', {
    responses: {
      '200': {
        description: 'EddModel model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(EddModel)) where?: Where<EddModel>,
  ): Promise<Count> {
    return await this.eddModelRepository.count(where);
  }

  @get('/edd-models', {
    responses: {
      '200': {
        description: 'Array of EddModel model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': EddModel}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(EddModel)) filter?: Filter<EddModel>,
  ): Promise<EddModel[]> {
    return await this.eddModelRepository.find(filter);
  }

  @patch('/edd-models', {
    responses: {
      '200': {
        description: 'EddModel PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() eddModel: EddModel,
    @param.query.object('where', getWhereSchemaFor(EddModel)) where?: Where<EddModel>,
  ): Promise<Count> {
    return await this.eddModelRepository.updateAll(eddModel, where);
  }

  @get('/edd-models/{id}', {
    responses: {
      '200': {
        description: 'EddModel model instance',
        content: {'application/json': {schema: {'x-ts-type': EddModel}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<EddModel> {
    return await this.eddModelRepository.findById(id);
  }

  @patch('/edd-models/{id}', {
    responses: {
      '204': {
        description: 'EddModel PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() eddModel: EddModel,
  ): Promise<void> {
    await this.eddModelRepository.updateById(id, eddModel);
  }

  @put('/edd-models/{id}', {
    responses: {
      '204': {
        description: 'EddModel PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() eddModel: EddModel,
  ): Promise<void> {
    await this.eddModelRepository.replaceById(id, eddModel);
  }

  @del('/edd-models/{id}', {
    responses: {
      '204': {
        description: 'EddModel DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.eddModelRepository.deleteById(id);
  }
}
