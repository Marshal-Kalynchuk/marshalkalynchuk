'use client';

import { usePathname } from 'next/navigation';
import { NavbarItem } from '@/components/ui/navbar';

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <NavbarItem current={pathname === '/'} href="/">
        About
      </NavbarItem>
      <NavbarItem current={pathname === '/projects'} href="/projects">
        Projects
      </NavbarItem>
    </>
  );
} 