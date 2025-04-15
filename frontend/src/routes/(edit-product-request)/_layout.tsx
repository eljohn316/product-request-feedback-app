import { createFileRoute, Outlet } from '@tanstack/react-router';
import { ReturnLink } from '@/components/return-link';
import editFeedbackIcon from '@/assets/shared/icon-edit-feedback.svg';

export const Route = createFileRoute('/(edit-product-request)/_layout')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="px-6 py-[2.125rem] md:mx-auto md:max-w-[33.75rem] md:px-0 md:py-14">
      <ReturnLink to="..">Go Back</ReturnLink>
      <div className="relative mt-[3.4375rem] rounded-[0.625rem] bg-white px-6 pt-11 pb-6 md:mt-[4.25rem] md:px-[2.625rem] md:pt-[3.25rem] md:pb-10">
        <img
          src={editFeedbackIcon}
          alt="New feedback icon"
          className="absolute top-0 size-10 -translate-y-1/2"
        />
        <Outlet />
      </div>
    </div>
  );
}
