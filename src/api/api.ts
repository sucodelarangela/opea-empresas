import axios, { AxiosResponse } from 'axios';
import { IClient } from 'interfaces/IClient';

export const api = axios.create({
  baseURL: 'https://homolog.planetasec.com.br/prova/front/api/clients'
});

// Destruturando o axios e recebendo o objeto `data` de dentro dele
const responseBody = (response: AxiosResponse) => response.data;

// Objeto `request` para lidar com o CRUD e retornando o response.data acima.
const requests = {
  get: (url: string) => api.get(url).then(responseBody)
};

// Objeto `Clients` que usa o objeto `requests`para executar as operações de CRUD.
// Se houvessem outras operações (post, put, delete, etc), elas também estariam dentro desse objeto.
export const Clients = {
  getClients: (): Promise<IClient[]> => requests.get('/')
};
