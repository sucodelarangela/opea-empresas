/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { IClient } from 'interfaces/IClient';
import { Clients } from 'api/api';

interface IClientContext {
  clients: IClient[];
  error: string | null;
  loading: boolean;
  setClients: React.Dispatch<React.SetStateAction<IClient[]>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ClientProviderProps {
  children: ReactNode;
}

const ClientContext = createContext<Partial<IClientContext>>({});

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  return (
    <ClientContext.Provider value={{ clients, error, loading, setClients, setError, setLoading }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => {
  const { clients, error, loading, setClients, setError, setLoading } = useContext<Partial<IClientContext>>(ClientContext);

  useEffect(() => {
    setLoading?.(true);
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
  }, []);


  return { clients, error, loading, setClients, setError, setLoading };
};
