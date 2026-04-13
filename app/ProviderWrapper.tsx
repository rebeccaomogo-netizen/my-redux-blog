"use client";

import React, { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { store } from "./store"; 
import { RootState } from "./store";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // ADDED: "/importance" to the public list
  const publicRoutes = ["/", "/about", "/contact", "/login", "/signup", "/importance"];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (!isAuthenticated && !publicRoutes.includes(pathname)) {
        router.push("/login");
      }
      
      if (isAuthenticated && (pathname === "/login" || pathname === "/signup")) {
        router.push("/blog");
      }
    }
  }, [isAuthenticated, pathname, router, mounted]);

  if (!mounted) return <div className="min-h-screen bg-white" />;

  return <>{children}</>;
}

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthGuard>{children}</AuthGuard>
    </Provider>
  );
}