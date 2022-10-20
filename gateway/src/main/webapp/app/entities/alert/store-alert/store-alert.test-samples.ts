import dayjs from 'dayjs/esm';

import { IStoreAlert, NewStoreAlert } from './store-alert.model';

export const sampleWithRequiredData: IStoreAlert = {
  id: 34729,
  storeName: 'solid Handcrafted Italy',
  storeStatus: 'Rustic',
  timestamp: dayjs('2022-10-19T22:09'),
};

export const sampleWithPartialData: IStoreAlert = {
  id: 55496,
  storeName: 'solution-oriented Salad',
  storeStatus: 'port',
  timestamp: dayjs('2022-10-20T06:29'),
};

export const sampleWithFullData: IStoreAlert = {
  id: 43550,
  storeName: 'Lilangeni',
  storeStatus: 'Money',
  timestamp: dayjs('2022-10-20T00:49'),
};

export const sampleWithNewData: NewStoreAlert = {
  storeName: 'Car',
  storeStatus: 'world-class Concrete',
  timestamp: dayjs('2022-10-20T00:36'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
