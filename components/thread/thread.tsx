import PostContainer from "./post";

type ThreadContainerProps = {
  threadWithPosts: ThreadWithPosts;
};
const ThreadContainer = ({ threadWithPosts: thread }: ThreadContainerProps) => {
  return (
    <ol className="flex list-none flex-col gap-4">
      {thread.posts.map((post) => (
        <li key={post.id}>
          <PostContainer post={post} />
        </li>
      ))}
    </ol>
  );
};

export default ThreadContainer;
