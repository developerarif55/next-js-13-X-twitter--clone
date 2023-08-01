import getUsers from "../actions/getUser"
import Avater from "./Avater"

async function Followbar() {
  const users = await getUsers()
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-900 rounded-xl p-4">
        <div className="flex flex-col gap-5 mt-4">

          {
            users.map((user) => (
              <div key={user.id} className="flex flex-row gap-4">
                <Avater userId={user.id} />
                <div className="flex flex-col">
                  <p className="text-white font-semibold text-sm">
                    {
                      user.name
                    }
                  </p>
                  <p className="text-neutral-500 text-sm">
                    {
                      user.username
                    }
                  </p>


                </div>

              </div>
            ))
          }
          
        </div>

      </div>

    </div>
  )
}

export default Followbar