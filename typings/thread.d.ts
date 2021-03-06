type Category = {
  id: number;
  name: string;
  created_at: string;
};

type Thread = {
  id: number;
  title: string;
  category_id: number;
  created_at: string;
};

type Post = {
  id: number;
  number: number;
  body: string;
  created_at: string;
  username: string;
  thread_id: number;
};

type ThreadWithPosts = Thread & {
  posts: Post[];
};
