import { Link } from '@tanstack/react-router';
import { EmptyIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function ProductRequestEmpty() {
  return (
    <div className="flex flex-col items-center justify-center rounded-[0.625rem] bg-white px-6 py-[4.75rem] md:py-[6.875rem]">
      <EmptyIcon />
      <div className="mx-auto max-w-[25.625rem] text-center">
        <h1 className="text-east-bay -trac mt-10 text-lg font-bold -tracking-[0.01125rem] md:text-2xl">
          There is no feedback yet.
        </h1>
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
