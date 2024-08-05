import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 28183,
  login: 'Y6@hk\\k4z',
};

export const sampleWithPartialData: IUser = {
  id: 16271,
  login: '7',
};

export const sampleWithFullData: IUser = {
  id: 14427,
  login: 'k',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
