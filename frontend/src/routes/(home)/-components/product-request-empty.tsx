import { Link, useSearch } from '@tanstack/react-router';
import { EmptyIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { CATEGORIES } from '@routes/home/-lib/constants';

export function ProductRequestEmpty() {
  const { category } = useSearch({ from: '/(home)/_layout' });

  if (category !== 'all')
    return (
      <div className="flex flex-col items-center justify-center rounded-[0.625rem] bg-white px-6 py-[4.75rem] md:py-[6.875rem]">
        <EmptyIcon />
        <div className="mx-auto max-w-[25.625rem] text-center">
          <h2 className="text-waikawa-gray -trac mt-10 text-lg font-semibold -tracking-[0.01125rem] md:text-2xl">
            No results found for{' '}
            <span className="text-east-bay capitalize">
              &ldquo;{CATEGORIES.find((item) => item.value === category)?.label}
              &rdquo;
            </span>
          </h2>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center rounded-[0.625rem] bg-white px-6 py-[4.75rem] md:py-[6.875rem]">
      <EmptyIcon />
      <div className="mx-auto max-w-[25.625rem] text-center">
        <h2 className="text-east-bay -trac mt-10 text-lg font-bold -tracking-[0.01125rem] md:text-2xl">
          There is no feedback yet.
        </h2>
        <p className="text-waikawa-gray mt-3.5 text-[0.8125rem]">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Button fill="violet" className="mt-6" asChild>
          <Link to="/new">+ Add feedback</Link>
        </Button>
      </div>
    </div>
  );
}
