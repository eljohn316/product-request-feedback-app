export type ProductRequest = {
  id: string;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  _count: {
    comments: number;
  };
};

export type User = {
  id: string;
  image: string;
  name: string;
  username: string;
};

export type Reply = {
  id: string;
  content: string;
  replyingTo: string;
  user: User;
};

export type Comment = {
  id: string;
  content: string;
  user: User;
  replies: Reply[];
};

export type Category = 'feature' | 'ui' | 'ux' | 'enhancement' | 'bug';

export type Status = 'suggestion' | 'planned' | 'in-progress' | 'live';
