import { ReactNode, createContext, useContext, useState } from "react";

interface UserFollowerContextType {
    followingCount: number;
    setFollowingCount: React.Dispatch<React.SetStateAction<number>>;
}

export const UserFollowersContext = createContext<UserFollowerContextType | null>(null);


export const FollowrProvider = ({ children }: { children: ReactNode }) => {
    const [followingCount, setFollowingCount] = useState(0);

    return (
        <UserFollowersContext.Provider
            value={{ followingCount, setFollowingCount }}>
            {children}
        </UserFollowersContext.Provider>
    )
}

export const useFollower = () => useContext(UserFollowersContext);