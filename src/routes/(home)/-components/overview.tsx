import { cn } from '@/lib/utils';

export function Overview({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-[0.625rem] bg-white px-6 py-5', className)}>
      <div className="flex items-center justify-between">
        <p className="heading-3 text-east-bay">Roadmap</p>
        <a
          href="#"
          className="text-royal-blue text-[0.8125rem] leading-0 font-semibold underline">
          View
        </a>
      </div>
      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between">
          <div className="bg-tangering size-2 flex-none rounded-full" />
          <p className="text-waikawa-gray ml-2 text-base">Planned</p>
          <p className="text-waikawa-gray ml-auto text-base font-bold">2</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-electric-violet size-2 flex-none rounded-full" />
          <p className="text-waikawa-gray ml-2 text-base">In-Progress</p>
          <p className="text-waikawa-gray ml-auto text-base font-bold">3</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-malibu size-2 flex-none rounded-full" />
          <p className="text-waikawa-gray ml-2 text-base">Live</p>
          <p className="text-waikawa-gray ml-auto text-base font-bold">1</p>
        </div>
      </div>
    </div>
  );
}
