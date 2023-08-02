"use client";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineRetweet,
  AiOutlineShareAlt,
} from "react-icons/ai";
import Avater from "../Avater";

function PostItems({ postData }) {
  const isLiked = true;
  const LikeIcon = isLiked ? AiFillHeart : AiOutlineHeart;
  return (
    <div className="border-b-[1px] border-neutral-900 p-5 cursor-pointer hover:bg-neutral-900 transition">
      <div className="flex flex-row gap-3">
        <Avater userId={postData.userId} />
        <div>
          <div className="flex items-center gap-2">
            <p className="text-white font-semibold cursor-pointer hover:outline-none">
              {postData.user.name}
            </p>
            <span
              onClick={""}
              className="
                text-neutral-500
                cursor-pointer
                hover:underline
                hidden
                md:block
            "
            >
              @{postData?.user.username}
            </span>
          </div>
          <div className="text-white mt-1">{postData.body}</div>
          <div className="flex flex-row items-center mt-3 gap-11">
            <div className="flex items-center text-neutral-600 gap-2 cursor-pointer transition hover:text-red-600">
              <LikeIcon color={isLiked ? "red" : ""} size={22} />
              <p>{postData?.likeCount || 0}</p>
            </div>
            <div className="flex items-center text-neutral-600 gap-2 cursor-pointer transition hover:text-sky-600">
              <AiOutlineMessage size={22} />
              <p>{postData.comments?.lenght || 0}</p>
            </div>
            <div className="flex items-center text-neutral-600 gap-2 cursor-pointer transition hover:text-sky-600">
              <AiOutlineRetweet size={22} />
              <p>{0}</p>
            </div>
            <div className="flex items-center text-neutral-600 gap-2 cursor-pointer transition hover:text-sky-600">
              <AiOutlineShareAlt size={22} />
              <p>{0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItems;
