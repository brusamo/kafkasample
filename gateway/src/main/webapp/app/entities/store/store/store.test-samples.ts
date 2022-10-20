import dayjs from 'dayjs/esm';

import { StoreStatus } from 'app/entities/enumerations/store-status.model';

import { IStore, NewStore } from './store.model';

export const sampleWithRequiredData: IStore = {
  id: 9662,
  name: 'web Books',
  address: 'port Islands JSON',
  createTimestamp: dayjs('2022-10-19T21:33'),
};

export const sampleWithPartialData: IStore = {
  id: 36967,
  name: 'Fantastic Keyboard supply-chains',
  address: 'Gorgeous',
  createTimestamp: dayjs('2022-10-20T06:58'),
  updateTimestamp: dayjs('2022-10-19T21:34'),
};

export const sampleWithFullData: IStore = {
  id: 43072,
  name: 'SMS Response Fresh',
  address: 'Assistant navigating',
  status: StoreStatus['CLOSED'],
  createTimestamp: dayjs('2022-10-19T13:03'),
  updateTimestamp: dayjs('2022-10-20T06:39'),
};

export const sampleWithNewData: NewStore = {
  name: 'Avon',
  address: 'PCI firmware Sleek',
  createTimestamp: dayjs('2022-10-20T00:12'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
