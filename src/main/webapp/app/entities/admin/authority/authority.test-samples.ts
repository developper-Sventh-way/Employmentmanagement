import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '37123c8f-bcb5-4ee3-ab94-abcf4107a4b7',
};

export const sampleWithPartialData: IAuthority = {
  name: '9bd87e54-52b8-4604-9b57-9b1264f6a25f',
};

export const sampleWithFullData: IAuthority = {
  name: 'a7c517e9-60c2-48ee-85b1-0a38b8dd442b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
