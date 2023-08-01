import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import { handler } from "./api/auth/[...nextauth]/route";
import Header from "./component/Header";
import Login from "./component/modal/Login";
import Register from "./component/modal/Register";
import From from "./component/post/From";

export default async function Home() {
  const session = await getServerSession(handler)
  return (
    <>
     <h1>Post FEED </h1>
     <Toaster />
     <Login />
     {
      session ? "":  <Register />
     }
     <Header label="Home" />
     <From placeholder="what's your mind...?" />
    
   
    </>
 
  )
}
