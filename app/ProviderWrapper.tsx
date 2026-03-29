'use client';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from './store';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  // 1. Prevent "Hydration" errors and freezing
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Stable Redirect Logic
  useEffect(() => {
    if (isMounted) {
      if (!isAuthenticated && pathname !== '/login') {
        router.push('/login');
      } 
      else if (isAuthenticated && pathname === '/login') {
        router.push('/');
      }
    }
  }, [isAuthenticated, pathname, router, isMounted]);

  // 3. If the app is still "thinking", show nothing to prevent freezing the UI
  if (!isMounted) return null;

  return <>{children}</>;
}

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthGuard>
        {children}
      </AuthGuard>
    </Provider>
  );
}