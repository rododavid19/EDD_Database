import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class EddModel extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
    default: 1,
  })
  serial: number;

  @property({
    type: 'date',
  })
  sale_date?: string;

  @property({
    type: 'string',
  })
  specs?: string;

  @property({
    type: 'string',
  })
  part_number?: string;

  @property({
    type: 'string',
  })
  company?: string;


  constructor(data?: Partial<EddModel>) {
    super(data);
  }
}

export interface EddModelRelations {
  // describe navigational properties here
}

export type EddModelWithRelations = EddModel & EddModelRelations;
