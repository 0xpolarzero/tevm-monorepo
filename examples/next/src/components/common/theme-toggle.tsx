'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/common/icons';

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Icons.moon className="hidden size-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
