import clsx from 'clsx'

export function Divider({
  soft = false,
  className,
  ...props
}: { soft?: boolean } & React.ComponentPropsWithoutRef<'hr'>) {
  return (
    <hr
      role="presentation"
      {...props}
      className={clsx(
        className,
        'w-full border-t',
        soft && 'border-stone-950/5 dark:border-stone-50/5',
        !soft && 'border-stone-950/10 dark:border-stone-50/10'
      )}
    />
  )
}
