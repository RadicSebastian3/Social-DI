'use client'
import { BrowserRouter, useNavigate } from "react-router-dom";
import { RouteList } from "./Route/RouteList";
import { UserLoginProvider } from "@/contexts/LoginUser";
import { FollowrProvider } from "@/contexts/Follower";

const App = () => {
  return (
    <UserLoginProvider>
      <FollowrProvider>
        <BrowserRouter>
          <main>
            <RouteList />
          </main>
        </BrowserRouter>
      </FollowrProvider>
    </UserLoginProvider>
  )
}

export default App;