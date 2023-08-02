import getSingleUser from "@/app/actions/getSingleUser";
import Header from "@/app/component/Header";
import UserBio from "@/app/component/UserBio";
import UserHero from "@/app/component/UserHero";

import current from "@/app/actions/CurrentUser";
import Edit from "@/app/component/modal/Edit";
import PostFeed from "@/app/component/post/PostFeed";
import { Toaster } from "react-hot-toast";

async function page({ params: { userId } }) {
  const user = await getSingleUser(userId);

  const currentUser = await current();

  return (
    <>
      <Toaster />

      <Header showBackArrow label={user?.name} />

      <div className="h-screen overflow-scroll  scrollbar-none">
        {/* userhero */}
        <UserHero
          userId={user?.id}
          coverPic={user?.coverPic}
          profilePic={user?.profilePic}
        />
        {/* userbio */}
        <UserBio
          currentUserID={currentUser?.id}
          currentUser={currentUser}
          key={user?.id}
          userId={user?.id}
          bio={user?.bio}
          name={user?.name}
          username={user?.username}
          createdAt={user?.created_at}
          following={user?.following}
          followersCount={user?.followersCount}
        />
        <Edit user={user} />
        <PostFeed userId={userId} />
      </div>
    </>
  );
}

export default page;
