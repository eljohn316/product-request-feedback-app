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
