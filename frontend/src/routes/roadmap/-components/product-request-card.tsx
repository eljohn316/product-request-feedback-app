import { ArrowUpIcon, CommentsIcon } from '@/components/icons';
import { type ProductRequest } from '@/lib/types';
import { Link } from '@tanstack/react-router';

interface ProductRequestCardProps {
  productRequest: ProductRequest;
  onUpvote: React.MouseEventHandler;
}

export function ProductRequestCard({
  productRequest,
  onUpvote
}: ProductRequestCardProps) {
  return (
    <Link
      to="/$id"
      params={{ id: productRequest.id }}
      className="[&:hover_h3]:text-royal-blue">
      <div className="relative overflow-hidden rounded-[0.625rem] bg-white px-6 py-[1.375rem] md:rounded-[0.3125rem] md:px-5 md:pt-[1.625rem] md:pb-6 lg:p-8">
        {productRequest.status === 'planned' && (
          <>
            <div className="bg-tangering absolute inset-x-0 top-0 h-1.5" />
            <div className="flex items-center gap-x-2 md:gap-x-4">
              <span className="bg-tangering size-2 rounded-full" />
              <span className="text-waikawa-gray text-[0.8125rem] lg:text-base">
                Planned
              </span>
            </div>
          </>
        )}
        {productRequest.status === 'in-progress' && (
          <>
            <div className="bg-electric-violet absolute inset-x-0 top-0 h-1.5" />
            <div className="flex items-center gap-x-2 md:gap-x-4">
              <span className="bg-electric-violet size-2 shrink-0 rounded-full" />
              <span className="text-waikawa-gray text-[0.8125rem] lg:text-base">
                In Progress
              </span>
            </div>
          </>
        )}
        {productRequest.status === 'live' && (
          <>
            <div className="bg-malibu absolute inset-x-0 top-0 h-1.5" />
            <div className="flex items-center gap-x-2 md:gap-x-4">
              <span className="bg-malibu size-2 rounded-full" />
              <span className="text-waikawa-gray text-[0.8125rem] lg:text-base">
                Live
              </span>
            </div>
          </>
        )}
        <div className="mt-4 space-y-[0.5625rem] md:mt-3.5 lg:mt-2 lg:space-y-1">
          <h3 className="text-east-bay text-[0.8125rem] font-bold -tracking-[0.01125rem] lg:text-lg lg:-tracking-[0.015625rem]">
            {productRequest.title}
          </h3>
          <p className="text-waikawa-gray text-[0.8125rem] lg:text-base">
            {productRequest.description}
          </p>
        </div>
        <div className="text-royal-blue bg-zircon mt-2 w-min rounded-[0.625rem] px-4 py-1.5 text-[0.8125rem] font-semibold capitalize md:mt-6 lg:mt-4">
          {productRequest.category}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            className="bg-zircon text-east-bay active:bg-royal-blue inline-flex cursor-pointer items-center gap-x-2 rounded-[0.625rem] px-4 py-1.5 text-[0.8125rem] font-bold hover:bg-[#CFD7FF] active:text-white active:[&_svg]:text-white"
            onClick={onUpvote}>
            <ArrowUpIcon className="text-royal-blue" />
            {productRequest.upvotes}
          </button>
          <div className="text-east-bay inline-flex items-center gap-x-2 text-[0.8125rem] font-bold -tracking-[0.01125rem] lg:text-base lg:-tracking-[0.01375rem]">
            <CommentsIcon />
            <span>{productRequest._count.comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
