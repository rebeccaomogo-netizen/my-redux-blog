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

  // Define which routes are "Public" (accessible before login)
  const publicRoutes = ["/", "/login", "/about", "/contact"];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // If user is NOT logged in AND trying to access a PRIVATE page
      if (!isAuthenticated && !publicRoutes.includes(pathname)) {
        router.push("/login");
      }
      
      // Optional: Redirect away from login if already authenticated
      if (isAuthenticated && pathname === "/login") {
        router.push("/blog"); // Or wherever your dashboard is
      }
    }
  }, [isAuthenticated, pathname, router, mounted]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) return <div className="min-h-screen bg-white" />;

  return <>{children}</>;
}

export default function ProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <AuthGuard>{children}</AuthGuard>
    </Provider>
  );
}