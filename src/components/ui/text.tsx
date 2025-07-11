import clsx from 'clsx'
import { Link } from './link'

interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
  /**
   * Visual emphasis of the text. "secondary" keeps the existing subdued styling.
   * "primary" makes the text higher-contrast for content that should stand out (e.g. chat messages).
   */
  variant?: 'primary' | 'secondary'
}

export function Text({ className, variant = 'primary', ...props }: TextProps) {
  const variantClasses =
    variant === 'primary'
      ? 'text-lg/7 text-stone-950 sm:text-lg/7 dark:text-stone-50'
      : 'text-base/7 text-stone-600 sm:text-base/7 dark:text-stone-400'

  return (
    <p
      data-slot="text"
      {...props}
      className={clsx(className, variantClasses)}
    />
  )
}

export function TextLink({ className, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'text-stone-950 underline decoration-stone-950/50 data-hover:decoration-stone-950 dark:text-stone-50 dark:decoration-stone-50/50 dark:data-hover:decoration-stone-50'
      )}
    />
  )
}

export function Strong({ className, ...props }: React.ComponentPropsWithoutRef<'strong'>) {
  return <strong {...props} className={clsx(className, 'font-medium text-zinc-950 dark:text-white')} />
}

export function Code({ className, ...props }: React.ComponentPropsWithoutRef<'code'>) {
  return (
    <code
      {...props}
      className={clsx(
        className,
        'rounded-sm border border-zinc-950/10 bg-zinc-950/[2.5%] px-0.5 text-sm font-medium text-zinc-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white'
      )}
    />
  )
}
