'use client'

import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { LayoutGroup, motion } from 'framer-motion'
import React, { forwardRef, useId } from 'react'
import { TouchTarget } from './button'
import { Link } from './link'

export function Navbar({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>) {
  return <nav {...props} className={clsx(className, 'flex flex-1 items-center gap-4 py-2.5')} />
}

export function NavbarDivider({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx(className, 'h-6 w-px bg-stone-950/10 dark:bg-white/10')} />
}

export function NavbarSection({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const id = useId()

  return (
    <LayoutGroup id={id}>
      <div {...props} className={clsx(className, 'flex items-center gap-3')} />
    </LayoutGroup>
  )
}

export function NavbarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx(className, '-ml-4 flex-1')} />
}

export const NavbarItem = forwardRef(function NavbarItem(
  {
    current,
    className,
    children,
    ...props
  }: { current?: boolean; className?: string; children: React.ReactNode } & (
    | Omit<Headless.ButtonProps, 'as' | 'className'>
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>
  ),
  ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
  const classes = clsx(
    // Base
    'relative flex min-w-0 items-center gap-3 rounded-full px-2.5 py-2 text-left text-base/6 font-medium text-stone-600 sm:text-sm/5',
    // Leading icon/icon-only
    '*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-stone-500 sm:*:data-[slot=icon]:size-5',
    // Trailing icon (down chevron or similar)
    '*:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4',
    // Avatar
    '*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6',
    // Hover
    'data-hover:text-stone-950 data-hover:*:data-[slot=icon]:fill-stone-950',
    // Active
    'data-active:text-stone-950 data-active:*:data-[slot=icon]:fill-stone-950',
    // Dark mode
    'dark:text-stone-400 dark:*:data-[slot=icon]:fill-stone-400',
    'dark:data-hover:text-white dark:data-hover:*:data-[slot=icon]:fill-white',
    'dark:data-active:text-white dark:data-active:*:data-[slot=icon]:fill-white'
  )

  const currentClasses = clsx(
    // 'bg-stone-950/5 dark:bg-white/5',
    '*:[data-slot=icon]:!fill-stone-950 dark:*:[data-slot=icon]:!fill-white'
  )

  return (
    <span className={clsx(className, 'relative')}>
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="absolute inset-0 rounded-full bg-stone-950/5 dark:bg-white/5"
        />
      )}
      {'href' in props ? (
        <Link
          {...props}
          className={clsx(classes, current && currentClasses)}
          data-current={current ? 'true' : undefined}
          data-active={current ? 'true' : undefined}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        >
          <TouchTarget>{children}</TouchTarget>
        </Link>
      ) : (
        <Headless.Button
          {...props}
          className={clsx('cursor-default', classes, current && currentClasses)}
          data-current={current ? 'true' : undefined}
          data-active={current ? 'true' : undefined}
          ref={ref}
        >
          <TouchTarget>{children}</TouchTarget>
        </Headless.Button>
      )}
    </span>
  )
})

export function NavbarLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={clsx(className, 'truncate')} />
}
