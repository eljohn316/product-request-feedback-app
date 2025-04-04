import { UpvoteButton } from '@/components/upvote-button';
import { CommentsIcon } from '@/components/icons';
import { ProductRequest } from '@routes/home/-lib/types';

interface ProductRequestItemProps {
  productRequest: ProductRequest;
}

export function ProductRequestItem({
  productRequest
}: ProductRequestItemProps) {
  return (
    <div className="group cursor-pointer rounded-[0.625rem] bg-white p-6 md:flex md:px-8 md:py-7">
      <div className="hidden md:mr-10 md:block md:flex-none">
        <UpvoteButton>{productRequest.upvotes}</UpvoteButton>
      </div>
      <div className="md:flex md:flex-1 md:items-center md:justify-between md:gap-x-4">
        <div className="md:flex-1">
          <h4 className="text-east-bay group-hover:text-royal-blue text-[0.8125rem] font-bold -tracking-[0.18px] md:text-lg md:-tracking-[0.25px]">
            {productRequest.title}
          </h4>
          <p className="text-waikawa-gray mt-[9px] text-[0.8125rem] md:mt-1 md:text-base">
            {productRequest.description}
          </p>
          <div className="bg-zircon text-royal-blue mt-2 inline-block rounded-[0.625rem] px-4 py-1.5 text-[0.8125rem] font-semibold capitalize md:mt-4">
            {productRequest.category}
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:gap-x-2.5">
          <CommentsIcon />
          <p className="text-east-bay text-[0.8125rem] font-bold -tracking-[0.18px]">
            {productRequest._count.comments}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between md:hidden">
          <UpvoteButton>{productRequest.upvotes}</UpvoteButton>
          <div className="flex items-center gap-x-1.5">
            <CommentsIcon />
            <p className="text-east-bay text-[0.8125rem] font-bold -tracking-[0.18px]">
              {productRequest._count.comments}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
