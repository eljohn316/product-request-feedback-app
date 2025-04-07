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
