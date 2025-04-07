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

export type Comment = {
  id: string;
  content: string;
  user: {
    id: string;
    image: string;
    name: string;
    username: string;
  };
  replies: {
    id: string;
    content: string;
    replyingTo: string;
    user: {
      id: string;
      image: string;
      name: string;
      username: string;
    };
  }[];
};
