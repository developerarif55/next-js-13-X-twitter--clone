import PostItems from "./PostItems";

function CommentFeed({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <PostItems key={comment.id} postData={comment} />
      ))}
    </div>
  );
}

export default CommentFeed;
