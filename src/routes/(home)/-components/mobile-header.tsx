import { useState } from 'react';
import { CloseIcon, HamburgerIcon } from '@/components/icons';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import background from '@/assets/suggestions/mobile/background-header.png';
import { Filters } from './filters';
import { Overview } from './overview';

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="space-y-6">
          <SheetTitle>Mobile sidebar</SheetTitle>
          <Filters />
          <Overview />
        </SheetContent>
      </Sheet>
      <div className="relative flex h-[4.5rem] md:hidden">
        <div className="absolute inset-0 -z-10">
          <img src={background} className="size-full object-cover" alt="" />
        </div>
        <div className="flex flex-1 items-center justify-between px-6 py-4">
          <div>
            <p className="text-[0.9375rem] font-bold -tracking-[0.19px] text-white">
              Frontend Mentor
            </p>
            <p className="text-[0.8125rem] font-medium text-white/75">
              Feedback Board
            </p>
          </div>
          {open ? (
            <button
              type="button"
              className="-m-1 cursor-pointer p-1"
              onClick={() => setOpen(false)}>
              <span className="sr-only">Close mobile sidebar</span>
              <CloseIcon />
            </button>
          ) : (
            <button
              type="button"
              className="-m-1 cursor-pointer p-1"
              onClick={() => setOpen(true)}>
              <span className="sr-only">Open mobile sidebar</span>
              <HamburgerIcon />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
