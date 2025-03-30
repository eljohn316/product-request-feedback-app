import { cn } from '@/lib/utils';
import backgroundHeaderTabletImage from '@/assets/suggestions/tablet/background-header.png';
import backgroundHeaderDesktopImage from '@/assets/suggestions/desktop/background-header.png';

export function TitleCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex overflow-hidden rounded-[0.625rem]',
        className
      )}>
      <img
        src={backgroundHeaderDesktopImage}
        className="absolute inset-0 -z-10 hidden size-full object-cover lg:block"
        alt=""
      />
      <img
        src={backgroundHeaderTabletImage}
        className="absolute inset-0 -z-10 size-full object-cover lg:hidden"
        alt=""
      />
      <div className="flex flex-1 flex-col justify-end p-6 lg:pt-16">
        <p className="heading-2 text-white">Frontend Mentor</p>
        <p className="body-2 font-medium text-white/75">Feedback Board</p>
      </div>
    </div>
  );
}
