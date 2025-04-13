import { createFileRoute } from '@tanstack/react-router';
import { ReturnLink } from '@/components/return-link';
import { NewFeedbackForm } from '@routes/new/-components/new-feedback-form';
import newFeedbackIcon from '@/assets/shared/icon-new-feedback.svg';

export const Route = createFileRoute('/new/')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="px-6 py-[2.125rem] md:mx-auto md:max-w-[33.75rem] md:px-0 md:py-14">
      <ReturnLink to="..">Go Back</ReturnLink>
      <div className="relative mt-[3.4375rem] rounded-[0.625rem] bg-white px-6 pt-11 pb-6 md:mt-[4.25rem] md:px-[2.625rem] md:pt-[3.25rem] md:pb-10">
        <img
          src={newFeedbackIcon}
          alt="New feedback icon"
          className="absolute top-0 size-10 -translate-y-1/2"
        />
        <div className="mb-6 md:mb-10">
          <h3 className="text-east-bay text-lg font-bold -tracking-[0.015625rem] md:text-2xl md:-tracking-[0.020625rem]">
            Create New Feedback
          </h3>
        </div>
        <NewFeedbackForm />
      </div>
    </div>
  );
}
