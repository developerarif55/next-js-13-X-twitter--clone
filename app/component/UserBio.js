"use client";
import axios from "axios";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { BiCalendar } from "react-icons/bi";
import useEdit from "../hooks/EditModal";
import Button from "./Button";

function UserBio({
  userId,
  name,
  username,
  bio,
  createdAt,
  following,
  currentUser,
  followersCount,

  currentUserID
}) {
  const createDate = useMemo(() => {
    if (!createdAt) {
      return null;
    }
    return format(new Date(createdAt), "MMMM yyyy");
  }, [createdAt]);
  const isCurrentUser = currentUserID === userId;
  const useEditModal = useEdit();

  const handleClick = useCallback(() => {
    console.log("handleClick");
    useEditModal.onOpen();
  }, [useEditModal]);

  // 1
  // 2

  const CheckUserFollowing = useMemo( () => {
    console.log(currentUser.id);
    const list = currentUser.following || [];
    return list.includes(userId);
  }, [userId, currentUser]);

  const router = useRouter();

  const handleFollow = useCallback (async () => {
    try {
      let request;
      if (CheckUserFollowing) {
        request = () => axios.delete(`/api/follow/${userId}`);
      } else {
        request = () =>
          axios.post(`/api/follow`, {
            userId,
          });
      }
      await request();
      router.refresh();
      console.log("doneeee");
      toast.success("success");
    } catch (error) {}
  }, [userId, CheckUserFollowing]);

  return (
    <div className="border-b-[1px] border-neutral-800 pb-5">
      <div className="flex justify-end p-2">
        {isCurrentUser ? (
          <Button secondary label="Edit" onClick={handleClick} />
        ) : (
          <Button
            onClick={handleFollow}
            secondary={!CheckUserFollowing}
            label={CheckUserFollowing ? "Unfollow" : "Follow"}
            outline={CheckUserFollowing}
          />
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">{name}</p>
          <p className="text-md text-white">@{username}</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">{bio}</p>
          <div className="flex flex-row items-center gap-2">
            <BiCalendar size={22} />
            <p>Joined {createDate}</p>
          </div>
        </div>

        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{following?.length}</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{followersCount}</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBio;
