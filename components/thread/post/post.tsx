import dayjs from "dayjs";
import Link from "next/link";
import "dayjs/locale/ko";

type PostContainerProps = {
  post: Post;
};
const PostContainer = ({ post }: PostContainerProps) => {
  const createdAt = dayjs(post.createdAt)
    .locale("ko")
    .format("YYYY-MM-DD a HH시 mm분");
  return (
    <article className="flex flex-col rounded bg-white p-4">
      <div className="flex flex-row gap-2">
        <Link href={`#${post.number}`}>
          <a>
            <span
              className="text-teal-500 hover:underline"
              id={String(post.number)}
            >
              &gt;&gt;{post.number}
            </span>
          </a>
        </Link>
        <span className="text-teal-600">{createdAt}</span>
      </div>
      <p
        className="text-teal-900"
        style={{
          wordBreak: "keep-all",
          overflowWrap: "break-word",
        }}
      >
        {post.body}
      </p>
    </article>
  );
};

export default PostContainer;
