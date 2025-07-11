import * as Headless from '@headlessui/react'
import NextLink, { type LinkProps } from 'next/link'
import React, { forwardRef } from 'react'

export const Link = forwardRef<HTMLAnchorElement, LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>(function Link(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { children, as: _linkAs, ...rest },
  ref
) {
  /*
   * `DataInteractive` expects its `as` prop to be a React.ElementType.  The default
   * Next.js `Link` component satisfies that, but its own prop set also includes an
   * `as` field for custom route masking (string | UrlObject).  To avoid a type
   * conflict we (1) cast the component to `ElementType` and (2) remove the
   * potential `as` routing prop from the rest-spread to prevent duplicate keys.
   */
  const LinkComponent = NextLink as unknown as React.ElementType

  return (
    <Headless.DataInteractive as={LinkComponent} ref={ref} {...rest}>
      {children}
    </Headless.DataInteractive>
  )
})