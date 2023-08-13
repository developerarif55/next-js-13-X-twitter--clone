import current from "@/app/actions/CurrentUser";
import getComment from "@/app/actions/getComment";
import getSinglePost from "@/app/actions/getSinglePost";
import Header from "@/app/component/Header";
import CommentFeed from "@/app/component/post/CommentFeed";
import Form from "@/app/component/post/Form";
import PostItems from "@/app/component/post/PostItems";
import { Toaster } from "react-hot-toast";

async function page({ params: { postId } }) {
    const currentUser = await current();
    const comments = await getComment(postId)
    
  const post = await getSinglePost(postId);
  console.log(`i am single post ${post}`);
  return (
    <div>
          <Toaster />
      <Header label="Reply" />
      <PostItems postData={post} currentUser={currentUser} />
      <Form postId={postId} isComment={true} placeholder="Your Reply.."/>
      <CommentFeed comments={comments} />
    </div>
  );
}

export default page;
