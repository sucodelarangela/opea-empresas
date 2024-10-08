import axios, { AxiosResponse } from 'axios';
import { IClient } from 'interfaces/IClient';

export const api = axios.create({
  baseURL: 'https://outros.opea-uat.solutions/prova/front/api'
});

// Destruturando o axios e recebendo o objeto `data` de dentro dele
const responseBody = (response: AxiosResponse) => response.data;

// Objeto `request` para lidar com o CRUD e retornando o response.data acima.
const requests = {
  get: (url: string) => api.get(url).then(responseBody),
  post: (url: string, body: object) => api.post(url, body).then(responseBody),
  put: (url: string, body: object) => api.put(url, body).then(responseBody),
  delete: (url: string) => api.delete(url).then(responseBody)
};

// Objeto `Clients` que usa o objeto `requests`para executar as operações de CRUD.
export const Clients = {
  getClients: (): Promise<IClient[]> => requests.get('/'),
  searchClient: (query: string): Promise<IClient[]> => requests.get(`?text=${query}`),
  postClient: (client: IClient): Promise<IClient> => requests.post('/', client),
  updateClient: (client: IClient, id: string): Promise<IClient> => requests.put(`/${id}`, client),
  deleteClient: (id: string): Promise<void> => requests.delete(`/${id}`)
};
