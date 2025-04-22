import { Comment as ProductRequestComment } from '@routes/product-request/-components/comment';
import { type Comment } from '@/lib/types';
import React, { SetStateAction } from 'react';

export function ProductRequestComments({ comments }: { comments: Comment[] }) {
  const totalComments = comments.length;

  function handleReply(
    formData: FormData,
    toggleReplyForm: React.Dispatch<SetStateAction<boolean>>
  ) {
    const username = formData.get('user') as string;
    const commentId = formData.get('comment') as string;
    const content = formData.get('content') as string;

    console.log({ username, commentId, content });
    toggleReplyForm(false);
  }

  if (totalComments === 0)
    return (
      <div className="mt-12 mb-28">
        <h3 className="heading-3 text-east-bay text-center">No comments yet</h3>
      </div>
    );

  return (
    <div className="rounded-[0.625rem] bg-white p-6 md:px-8">
      <h3 className="heading-3 text-east-bay mb-6 md:mb-7">
        {totalComments} {totalComments === 1 ? 'comment' : 'comments'}
      </h3>
      <div className="divide-y divide-[#8C92B3]/25">
        {comments.map((comment) => (
          <ProductRequestComment
            key={comment.id}
            as="comment"
            comment={comment}
            onReply={handleReply}
            renderReplies={(reply) => (
              <ProductRequestComment
                key={reply.id}
                as="reply"
                comment={reply}
                onReply={handleReply}
              />
            )}
          />
        ))}
      </div>
    </div>
  );
}
