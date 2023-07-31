import Image from "next/image"
import Avater from "./Avater"

function UserHero({coverPic, profilePic, userId}) {
  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {coverPic && (
          <Image
            src={coverPic}
            fill
            alt="Cover Image"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avater
            profilePic={profilePic}
            userId={userId}
            isLarge
            hasBorder
          />
        </div>
      </div>
    </div>
  )
}

export default UserHero