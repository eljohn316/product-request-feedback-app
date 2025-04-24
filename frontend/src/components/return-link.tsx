import { useRouter } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon } from '@/components/icons';

export function ReturnLink({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button
      className={cn(
        'text-waikawa-gray inline-flex cursor-pointer items-center gap-x-4 text-[0.8125rem] font-bold hover:underline md:text-sm',
        className
      )}
      onClick={() => router.history.back()}>
      <ArrowLeftIcon className="text-royal-blue" />
      Go Back
    </button>
  );
}
