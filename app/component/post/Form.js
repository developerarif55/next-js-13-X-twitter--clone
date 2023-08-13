"use client";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Avater from "../Avater";
import Button from "../Button";

function From({ placeholder, postId, isComment }) {
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      const endpoint = isComment ? "/api/comment" : "/api/post";
      const RequestBody = isComment ? { postId, body } : { body };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(RequestBody),
      });
      if (!res.ok) {
        console.log("Error fetch request");
      }
      setBody("");
      setIsLoading(false);
      toast.success(isComment ? "commnent has been created" : "post has been created");
      router.refresh();
    } catch (error) {
      console.log("Error fetch request");
    }
  }, [body, setBody, isComment]);

  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      <div className="flex flex-row gap-4">
        <div>
          <Avater />
        </div>
        <div
          className={` ${isComment ? "w-full flex justify-between" : "w-full"}`}
        >
          <textarea
            className="disabled:opacity-80 peer resize-none mt-3 w-full bg-black ring-0 outline-none text-[20px] placeholder-neutral-500 text-white"
            placeholder={placeholder}
            disabled={isLoading}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <div
            className={` ${
              isComment ? "mt-2" : "mt-4 flex flex-row justify-end"
            }`}
          >
            <Button
              disabled={isLoading || !body}
              onClick={onSubmit}
              label={`${isComment ? "Reply" : "Post"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default From;
