import { Comment } from '@routes/product-request/-components/comment';
import { type Comment as TComment } from '@routes/product-request/-lib/types';

export function ProductRequestComments({ comments }: { comments: TComment[] }) {
  if (comments.length === 0)
    return (
      <div className="mt-12 mb-28">
        <h3 className="heading-3 text-east-bay text-center">No comments yet</h3>
      </div>
    );

  return (
    <div className="rounded-[0.625rem] bg-white p-6 md:px-8">
      <h3 className="heading-3 text-east-bay mb-6 md:mb-7">
        {comments.length} comments
      </h3>
      <div className="divide-y divide-[#8C92B3]/25">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            as="comment"
            comment={comment}
            replies={(reply) => (
              <Comment key={reply.id} as="reply" comment={reply} />
            )}
          />
        ))}
      </div>
    </div>
  );
}
