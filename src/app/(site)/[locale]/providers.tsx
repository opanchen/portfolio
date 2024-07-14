'use client';

import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

const UIThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default UIThemeProvider;
