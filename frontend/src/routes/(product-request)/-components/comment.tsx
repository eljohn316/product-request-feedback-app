import { createContext, use, useState } from 'react';
import { cn, getUserImageUrl } from '@/lib/utils';
import type { Reply, Comment, User } from '@/lib/types';
import { TextareaInput } from '@/components/ui/textarea-input';
import { Button } from '@/components/ui/button';

type CommentProps =
  | {
      as: 'comment';
      comment: Comment;
      onReply: (
        formData: FormData,
        setToggleReply: React.Dispatch<React.SetStateAction<boolean>>
      ) => void | Promise<void>;
      renderReplies: (reply: Reply) => React.ReactNode;
    }
  | {
      as: 'reply';
      comment: Reply;
      onReply: (
        formData: FormData,
        setToggleReply: React.Dispatch<React.SetStateAction<boolean>>
      ) => void | Promise<void>;
      renderReplies?: never;
    };

type CommentContext = {
  user: User;
  toggleReply: boolean;
  setToggleReply: React.Dispatch<React.SetStateAction<boolean>>;
} & ({ as: 'comment'; comment: Comment } | { as: 'reply'; comment: Reply });

const CommentContext = createContext<CommentContext | undefined>(undefined);

function useComment() {
  const context = use(CommentContext);
  if (!context)
    throw new Error(
      'useContext must be used within <CommentProvider /> component.'
    );
  return context;
}

function CommentHeader() {
  const { user, toggleReply, setToggleReply } = useComment();

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
      {toggleReply ? (
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
      )}
    </div>
  );
}

function CommentContent({
  className,
  content,
  replyingTo,
  ...props
}: React.ComponentProps<'div'> & { replyingTo?: string; content: string }) {
  return (
    <div className={cn('mt-4 md:mt-[1.0625rem]', className)} {...props}>
      <p className="text-waikawa-gray text-[0.8125rem] md:text-[0.9375rem]">
        {replyingTo && (
          <span className="text-electric-violet font-bold">@{replyingTo} </span>
        )}
        {content}
      </p>
    </div>
  );
}

function CommentForm(props: React.ComponentProps<'form'>) {
  const { as, comment, toggleReply } = useComment();

  if (!toggleReply) return null;

  return (
    <form
      className="mt-4 flex flex-col gap-y-4 md:mt-[1.0625rem] md:flex-row md:items-start md:gap-x-4 md:gap-y-0 md:pl-[4.5rem]"
      {...props}>
      <input
        type="hidden"
        name="comment"
        value={as === 'comment' ? comment.id : comment.commentId}
      />
      <input type="hidden" name="user" value={comment.user.username} />
      <TextareaInput
        name="content"
        id="content"
        className="flex-1"
        placeholder="Type your reply here"
        autoFocus
        required
      />
      <div className="flex justify-end md:flex-none">
        <Button type="submit" fill="violet" className="">
          Post Reply
        </Button>
      </div>
    </form>
  );
}

function CommentReplyThreadIndicator() {
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

export function Comment({ as, comment, onReply, renderReplies }: CommentProps) {
  const [toggleReply, setToggleReply] = useState(false);

  if (as === 'comment') {
    const { replies } = comment;

    return (
      <CommentContext.Provider
        value={{
          as: 'comment',
          comment,
          user: comment.user,
          toggleReply,
          setToggleReply
        }}>
        <div className="py-6 first:pt-0 last:pb-0 md:py-8">
          <CommentHeader />
          <CommentContent
            className={cn(
              replies.length >= 1
                ? 'md:ml-5 md:border-l md:border-[#647196]/10 md:pl-[3.25rem]'
                : 'md:pl-[4.5rem]'
            )}
            content={comment.content}
          />
          <CommentForm
            action={(formData: FormData) => onReply(formData, setToggleReply)}
          />
          {comment.replies.length >= 1 && (
            <div className="mt-6 space-y-6 md:mt-8 md:ml-5 md:space-y-8">
              {comment.replies.map(renderReplies)}
            </div>
          )}
        </div>
      </CommentContext.Provider>
    );
  }

  return (
    <CommentContext.Provider
      value={{
        as: 'reply',
        comment: comment,
        user: comment.user,
        toggleReply,
        setToggleReply
      }}>
      <div className="group relative pl-6">
        <CommentHeader />
        <CommentContent
          className="md:pl-[4.5rem]"
          replyingTo={comment.replyingTo}
          content={comment.content}
        />
        <CommentForm
          action={(formData: FormData) => onReply(formData, setToggleReply)}
        />
        <CommentReplyThreadIndicator />
      </div>
    </CommentContext.Provider>
  );
}
