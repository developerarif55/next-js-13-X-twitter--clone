import Avater from "../Avater";

function PostItems({ postData }) {
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
        </div>
      </div>
    </div>
  );
}

export default PostItems;
