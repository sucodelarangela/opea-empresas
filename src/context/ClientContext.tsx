/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { IClient } from 'interfaces/IClient';
import { Clients } from 'api/api';

interface IClientContext {
  clients: IClient[];
  error: string | null;
  loading: boolean;
  query: string;
  setClients: React.Dispatch<React.SetStateAction<IClient[]>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface ClientProviderProps {
  children: ReactNode;
}

const ClientContext = createContext<Partial<IClientContext>>({});

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  return (
    <ClientContext.Provider value={{ clients, error, loading, query, setClients, setError, setLoading, setQuery }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => {
  const { clients, error, loading, query, setClients, setError, setLoading, setQuery } = useContext<Partial<IClientContext>>(ClientContext);

  const getClients = () => {
    Clients.getClients()
      .then(data => {
        setClients?.(data);
        setError?.('');
        setLoading?.(false);
      })
      .catch((err: any) => {
        console.error(err);
        setError?.('Houve um problema ao buscar os dados. Por favor, tente novamente mais tarde.');
        setLoading?.(false);
      });
  };

  useEffect(() => {
    setLoading?.(true);
    getClients();
  }, []);

  useEffect(() => {
    if (query!.length > 0) {
      setLoading?.(true);
      Clients.searchClient(query!)
        .then(data => {
          setClients?.(data);
          setLoading?.(false);
          data.length === 0 ? setError?.('Não encontramos resultados.') : setError?.('');
        })
        .catch((err: any) => {
          console.error(err);
          setError?.('Houve um problema ao buscar os dados. Por favor, tente novamente mais tarde.');
          setLoading?.(false);
        });
    } else {
      getClients();
    }
  }, [query]);

  return { clients, error, loading, query, setClients, setError, setLoading, setQuery };
};
