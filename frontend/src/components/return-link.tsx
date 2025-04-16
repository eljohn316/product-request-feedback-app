import * as React from 'react';
import { createLink, LinkComponent } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon } from '@/components/icons';

function ReturnLinkBase({
  className,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'text-waikawa-gray inline-flex cursor-pointer items-center gap-x-4 text-[0.8125rem] font-bold hover:underline md:text-sm',
        className
      )}
      {...props}>
      <ArrowLeftIcon className="text-royal-blue" />
      {children}
    </a>
  );
}

const CreatedReturnLinkBase = createLink(ReturnLinkBase);

export const ReturnLink: LinkComponent<typeof ReturnLinkBase> = (props) => {
  return <CreatedReturnLinkBase preload="intent" {...props} />;
};
