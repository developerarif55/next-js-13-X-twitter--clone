import getPosts from "@/app/actions/getPosts"
import PostItems from "./PostItems"

async function PostFeed({userId}) {
    const posts = await getPosts()
  const FilterPosts = userId ? posts.filter((post) => post.user.id === userId || post.userId === userId) : posts 

  return (
    <div>
        {FilterPosts.map((post) => (
            <PostItems key={post.id} postData={post}/>
        ))
        }
    </div>
  )
}

export default PostFeed