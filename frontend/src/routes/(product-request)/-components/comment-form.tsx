import * as React from 'react';
import { Button } from '@/components/ui/button';
import { TextareaInput } from '@/components/ui/textarea-input';

const MAX_CHARACTERS = 250;

export function CommentForm({ ...props }: React.ComponentProps<'form'>) {
  const [charactersLeft, setCharactersLeft] = React.useState(MAX_CHARACTERS);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const remaining = MAX_CHARACTERS - e.target.value.length;
    setCharactersLeft(remaining);
  }

  return (
    <form
      className="rounded-[0.625rem] bg-white p-6 md:px-[2.125rem]"
      {...props}>
      <div className="mb-6">
        <h3 className="heading-3 text-east-bay">Add Comment</h3>
      </div>
      <TextareaInput
        name="comment"
        id="comment"
        placeholder="Type your comment here"
        onChange={handleChange}
        rows={2}
        maxLength={MAX_CHARACTERS}
        required
      />
      <div className="mt-4 flex items-center justify-between">
        <p className="text-waikawa-gray text-[0.8125rem] md:text-[0.9375rem]">
          {charactersLeft} {charactersLeft === 1 ? 'character' : 'characters'}{' '}
          left
        </p>
        <Button type="submit" fill="violet">
          Post Comment
        </Button>
      </div>
    </form>
  );
}
