import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TextareaInput } from '@/components/ui/textarea-input';

const MAX_CHARACTERS = 250;

export function CommentForm() {
  const [characters, setCharacters] = useState('');
  const charactersLeft = MAX_CHARACTERS - characters.length;

  return (
    <form className="rounded-[0.625rem] bg-white p-6 md:px-[2.125rem]">
      <div className="mb-6">
        <h3 className="heading-3 text-east-bay">Add Comment</h3>
      </div>
      <TextareaInput
        name="comment"
        id="comment"
        placeholder="Type your comment here"
        value={characters}
        onChange={(e) => setCharacters(e.target.value)}
        maxLength={MAX_CHARACTERS}
      />
      <div className="mt-4 flex items-center justify-between">
        <p className="text-waikawa-gray text-[0.8125rem] md:text-[0.9375rem]">
          {charactersLeft} {charactersLeft === 1 ? 'character' : 'characters'}{' '}
          long
        </p>
        <Button type="submit" fill="violet">
          Post Comment
        </Button>
      </div>
    </form>
  );
}
