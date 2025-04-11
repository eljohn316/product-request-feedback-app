import { useState } from 'react';
import { cn, getUserImageUrl } from '@/lib/utils';
import {
  type Reply,
  type Comment,
  User
} from '@routes/product-request/-lib/types';
import { TextareaInput } from '@/components/ui/textarea-input';
import { Button } from '@/components/ui/button';

type CommentProps =
  | {
      as: 'comment';
      comment: Comment;
      replies: (reply: Reply) => React.ReactNode;
    }
  | {
      as: 'reply';
      comment: Reply;
      replies?: never;
    };

interface CommentHeaderProps {
  user: User;
  actions: React.ReactNode;
}

function CommentHeader({ user, actions }: CommentHeaderProps) {
  return (
    <div className="flex items-center gap-x-4 md:gap-x-8">
      <img
        src={getUserImageUrl(user.image)}
        alt={user.name}
        className="size-10 shrink-0 rounded-full"
      />
      <div className="flex-1">
        <p className="text-east-bay text-[0.8125rem] font-bold -tracking-[0.18px] md:text-sm md:-tracking-[0.19px]">
          {user.name}
        </p>
        <p className="text-waikawa-gray text-[0.8125rem] md:text-sm">
          @{user.username}
        </p>
      </div>
      {actions}
    </div>
  );
}

function CommentIndicator() {
  return (
    <div
      className={cn(
        'group-[&:first-child]:-bottom-6 group-[&:first-child]:md:-top-8 group-[&:first-child]:md:-bottom-8',
        'group-[&:not(:first-child):not(:last-child)]:-bottom-6 group-[&:not(:first-child):not(:last-child)]:md:-bottom-8',
        'group-[&:last-child]:h-5',
        'absolute top-0 left-0 w-px bg-[#647196]/10'
      )}
    />
  );
}

export function Comment({ as, comment, replies }: CommentProps) {
  const [toggleReply, setToggleReply] = useState(false);

  if (as === 'comment')
    return (
      <div className="py-6 first:pt-0 last:pb-0 md:py-8">
        <CommentHeader
          user={comment.user}
          actions={
            toggleReply ? (
              <button
                type="button"
                className="text-royal-blue shrink-0 cursor-pointer text-[0.8125rem] font-semibold hover:underline"
                onClick={() => setToggleReply(false)}>
                Cancel
              </button>
            ) : (
              <button
                type="button"
                className="text-royal-blue shrink-0 cursor-pointer text-[0.8125rem] font-semibold hover:underline"
                onClick={() => setToggleReply(true)}>
                Reply
              </button>
            )
          }
        />
        <div
          className={cn(
            comment.replies.length >= 1
              ? 'md:ml-5 md:border-l md:border-[#647196]/10 md:pl-[3.25rem]'
              : 'md:pl-[4.5rem]',
            'mt-4 md:mt-[1.0625rem]'
          )}>
          <p className="text-waikawa-gray text-[0.8125rem] md:text-[0.9375rem]">
            {comment.content}
          </p>
        </div>
        {toggleReply && (
          <form className="mt-4 flex flex-col gap-y-4 md:mt-[1.0625rem] md:flex-row md:items-start md:gap-x-4 md:gap-y-0 md:pl-[4.5rem]">
            <TextareaInput
              name="reply"
              id="reply"
              className="flex-1"
              placeholder="Type your reply here"
              autoFocus
            />
            <div className="flex justify-end md:flex-none">
              <Button type="submit" fill="violet" className="">
                Post Reply
              </Button>
            </div>
          </form>
        )}
        {comment.replies.length >= 1 && (
          <div className="mt-6 space-y-6 md:mt-8 md:ml-5 md:space-y-8">
            {comment.replies.map(replies)}
          </div>
        )}
      </div>
    );

  return (
    <div className="group relative pl-6">
      <CommentHeader
        user={comment.user}
        actions={
          toggleReply ? (
            <button
              type="button"
              className="text-royal-blue shrink-0 cursor-pointer text-[0.8125rem] font-semibold hover:underline"
              onClick={() => setToggleReply(false)}>
              Cancel
            </button>
          ) : (
            <button
              type="button"
              className="text-royal-blue shrink-0 cursor-pointer text-[0.8125rem] font-semibold hover:underline"
              onClick={() => setToggleReply(true)}>
              Reply
            </button>
          )
        }
      />
      <div className="mt-4 md:mt-[1.0625rem] md:pl-[4.5rem]">
        <p className="text-waikawa-gray text-[0.8125rem] md:text-[0.9375rem]">
          <span className="text-electric-violet font-bold">
            @{comment.replyingTo}
          </span>{' '}
          {comment.content}
        </p>
      </div>
      {toggleReply && (
        <form className="mt-4 flex flex-col gap-y-4 md:mt-[1.0625rem] md:flex-row md:items-start md:gap-x-4 md:gap-y-0 md:pl-[4.5rem]">
          <TextareaInput
            name="reply"
            id="reply"
            className="flex-1"
            placeholder="Type your reply here"
            autoFocus
          />
          <div className="flex justify-end md:flex-none">
            <Button type="submit" fill="violet" className="">
              Post Reply
            </Button>
          </div>
        </form>
      )}
      <CommentIndicator />
    </div>
  );
}
