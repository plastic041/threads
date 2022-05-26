import Divider from "~/components/divider";
import TextInput from "~/components/text-input";
import Thread from "~/components/thread";

type MainProps = {
  threadWithPosts: Thread & {
    posts: Post[];
  };
};
const Main = ({ threadWithPosts }: MainProps) => {
  return (
    <main className="mx-auto flex w-full flex-col gap-4 py-2 px-2 md:w-[512px] md:px-0">
      <Thread threadWithPost={threadWithPosts} />
      <Divider />
      <TextInput tid={threadWithPosts.id} />
    </main>
  );
};
export default Main;