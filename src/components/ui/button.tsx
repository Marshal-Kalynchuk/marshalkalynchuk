import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { Link } from './link'

const styles = {
  base: [
    // Base
    'relative isolate inline-flex items-baseline justify-center gap-x-2 border text-base/6 font-semibold',
    // Sizing
    'px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6',
    // Focus
    'focus:not-data-focus:outline-hidden data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500',
    // Disabled
    'data-disabled:opacity-50',
    // Icon
    '*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText]',
  ],
  solid: [
    // Optical border, implemented as the button background to avoid corner artifacts
    'border-transparent bg-(--btn-border)',
    // Dark mode: border is rendered on `after` so background is set to button background
    'dark:bg-(--btn-bg)',
    // Button background, implemented as foreground layer to stack on top of pseudo-border layer
    'before:absolute before:inset-0 before:-z-10 before:bg-(--btn-bg)',
    // Drop shadow, applied to the inset `before` layer so it blends with the border
    'before:shadow-sm',
    // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
    'dark:before:hidden',
    // Dark mode: Subtle white outline is applied using a border
    'dark:border-white/5',
    // Shim/overlay, inset to match button foreground and used for hover state + highlight shadow
    'after:absolute after:inset-0 after:-z-10',
    // Inner highlight shadow
    'after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)]',
    // White overlay on hover
    'data-active:after:bg-(--btn-hover-overlay) data-hover:after:bg-(--btn-hover-overlay)',
    // Dark mode: `after` layer expands to cover entire button
    'dark:after:-inset-px',
    // Disabled
    'data-disabled:before:shadow-none data-disabled:after:shadow-none',
  ],
  outline: [
    'after:absolute after:inset-0 before:absolute before:inset-0',
    // Base
    'border-stone-950/10 text-stone-950 data-active:bg-stone-950/[2.5%] data-hover:bg-stone-950/[2.5%]',
    // Dark mode
    'dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-active:bg-white/5 dark:data-hover:bg-white/5',
    // Icon
    '[--btn-icon:var(--color-stone-500)] data-active:[--btn-icon:var(--color-stone-700)] data-hover:[--btn-icon:var(--color-stone-700)] dark:data-active:[--btn-icon:var(--color-stone-400)] dark:data-hover:[--btn-icon:var(--color-stone-400)]',
  ],
  plain: [
    'after:absolute after:inset-0 before:absolute before:inset-0',
    // Base
    'border-transparent text-stone-950 data-active:bg-stone-950/5 data-hover:bg-stone-950/5',
    // Dark mode
    'dark:text-white dark:data-active:bg-white/10 dark:data-hover:bg-white/10',
    // Icon
    '[--btn-icon:var(--color-stone-500)] data-active:[--btn-icon:var(--color-stone-700)] data-hover:[--btn-icon:var(--color-stone-700)] dark:[--btn-icon:var(--color-stone-500)] dark:data-active:[--btn-icon:var(--color-stone-400)] dark:data-hover:[--btn-icon:var(--color-stone-400)]',
  ],
  colors: {
    'dark/stone': [
      'text-white [--btn-bg:var(--color-stone-900)] [--btn-border:var(--color-stone-950)]/90 [--btn-hover-overlay:var(--color-white)]/10',
      'dark:text-white dark:[--btn-bg:var(--color-stone-600)] dark:[--btn-hover-overlay:var(--color-white)]/5',
      '[--btn-icon:var(--color-stone-400)] data-active:[--btn-icon:var(--color-stone-300)] data-hover:[--btn-icon:var(--color-stone-300)]',
    ],
  },
}

type ButtonProps = (
  | { color?: keyof typeof styles.colors; outline?: never; plain?: never }
  | { color?: never; outline: true; plain?: never }
  | { color?: never; outline?: never; plain: true }
) & { 
  className?: string; 
  children: React.ReactNode;
  rounded?: boolean;
} & (
    | Omit<Headless.ButtonProps, 'as' | 'className'>
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>
  )

export const Button = forwardRef(function Button(
  { color, outline, plain, rounded, className, children, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const classes = clsx(
    className,
    styles.base,
    rounded ? 'rounded-full' : 'rounded-lg',
    outline ? styles.outline : plain ? styles.plain : clsx(styles.solid, styles.colors[color ?? 'dark/stone'])
  )
  
  // Apply specific radius styles to the before/after pseudo elements based on rounded prop
  const beforeClass = rounded ? 'before:rounded-[calc(9999px-1px)]' : 'before:rounded-[calc(var(--radius-lg)-1px)]'
  const afterClass = rounded ? 'after:rounded-[calc(9999px-1px)]' : 'after:rounded-[calc(var(--radius-lg)-1px)]'
  const darkAfterClass = rounded ? 'dark:after:rounded-full' : 'dark:after:rounded-lg'
  
  return 'href' in props ? (
    <Link 
      {...props} 
      className={clsx(classes, beforeClass, afterClass, darkAfterClass)} 
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      <TouchTarget>{children}</TouchTarget>
    </Link>
  ) : (
    <Headless.Button 
      {...props} 
      className={clsx(classes, beforeClass, afterClass, darkAfterClass, 'cursor-default')} 
      ref={ref}
    >
      <TouchTarget>{children}</TouchTarget>
    </Headless.Button>
  )
})

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
export function TouchTarget({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  )
}
