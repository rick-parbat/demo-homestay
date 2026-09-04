import { createContext, useContext } from 'react';
import { useApi } from '../hooks/useApi';

const SiteConfigContext = createContext(null);

export function SiteConfigProvider({ children }) {
  const { data: config, loading, error } = useApi('/api/config');

  return (
    <SiteConfigContext.Provider value={{ config, loading, error }}>
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  const ctx = useContext(SiteConfigContext);
  if (!ctx) throw new Error('useSiteConfig must be used within SiteConfigProvider');
  return ctx;
}
