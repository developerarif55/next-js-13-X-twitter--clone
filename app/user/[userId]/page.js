import getSingleUser from "@/app/actions/getSingleUser";
import Header from "@/app/component/Header";
import UserBio from "@/app/component/UserBio";
import UserHero from "@/app/component/UserHero";

import current from "@/app/actions/CurrentUser";
import Edit from "@/app/component/modal/Edit";
import { Toaster } from "react-hot-toast";


async function page({ params: { userId } }) {
  const user = await getSingleUser(userId);
  const currentUser = await current();

  return (
    <div className="text-white">
      {/* header */}
      <Toaster />

      <Header showBackArrow label={user?.name} />

      {/* userhero */}
      <UserHero
        userId={user?.id}
        coverPic={user?.coverPic}
        profilePic={user?.profilePic}
      />
      {/* userbio */}
      <UserBio
      currentUser={currentUser?.id}
        key={user?.id}
        userId={user?.id}
        bio={user?.bio}
        name={user?.name}
        username={user?.username}
        createdAt={user?.created_at}
        following={user?.following}
      />
      <Edit user={user}/>
    </div>
  );
}

export default page;
