import { api } from '../api.default';

export type CardPayload = {
  id?: string;
  number: string;
  cvv: string;
  expiration: string;
  name: string;
};

export const createCard = async (data: CardPayload) => {
  try {
    const response = await api.post('/cards', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCards = async () => {
  try {
    const response = await api.get('/cards');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
