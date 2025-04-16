import { ArrowUpIcon, CommentsIcon } from '@/components/icons';

const productRequest = {
  id: '89099265-8433-46dd-beb1-6c9582350632',
  title: 'Add tags for solutions',
  description: 'Easier to search for solutions based on a specific stack.',
  category: 'enhancement',
  upvotes: 113,
  status: 'suggestion',
  _count: { comments: 2 }
};

export function ProductRequestCard() {
  return (
    <div className="relative overflow-hidden rounded-[0.625rem] bg-white px-6 py-[1.375rem] md:px-5 md:py-[1.625rem]">
      <div className="bg-electric-violet absolute inset-x-0 top-0 h-1.5" />
      <div className="flex items-center gap-x-4">
        <span className="bg-electric-violet size-2 shrink-0 rounded-full" />
        <p className="text-waikawa-gray text-[0.8125rem] lg:text-base">
          Planned
        </p>
      </div>
      <div className="mt-4 md:mt-[0.875rem]">
        <h4 className="text-east-bay text-[0.8125rem] font-bold -tracking-[0.18px] lg:text-lg">
          {productRequest.title}
        </h4>
        <p className="text-waikawa-gray mt-[0.5625rem] text-[0.8125rem] lg:mt-1 lg:text-base">
          {productRequest.description}
        </p>
        <div className="bg-zircon text-royal-blue mt-2 inline-block rounded-[0.625rem] px-4 py-1.5 text-[0.8125rem] font-semibold capitalize md:mt-6">
          {productRequest.category}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button className="group bg-zircon active:bg-royal-blue text-east-bay [&_svg]:text-royal-blue inline-flex cursor-pointer items-center gap-x-2.5 rounded-[0.625rem] px-4 py-1.5 hover:bg-[#CFD7FF] active:text-white [&:active_svg]:text-white">
          <ArrowUpIcon aria-hidden="true" />
          <span className="text-[0.8125rem] font-bold -tracking-[0.18px]">
            {productRequest.upvotes}
          </span>
        </button>
        <div className="flex items-center gap-x-1.5">
          <CommentsIcon />
          <p className="text-east-bay text-[0.8125rem] font-bold -tracking-[0.18px] lg:text-base">
            {productRequest._count.comments}
          </p>
        </div>
      </div>
    </div>
  );
}
