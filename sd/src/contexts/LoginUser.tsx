import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface UserLoginContextType {
    name: string;
    setName: (n: string) => void;
    password: string;
    setPassword: (p: string) => void;
    Usernamekey: string;
    PasswordKey: string;
    photo: string;
    setPhoto: (p: string) => void;
    photoFile: File | null;
    setPhotoFile: (file: File | null) => void;
}

const STORAGE_KEY = 'photoSelectContext'

export const UserLoginContext = createContext<UserLoginContextType | null>(null);


export const UserLoginProvider = ({ children }: { children: ReactNode }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(localStorage.getItem(STORAGE_KEY) || '');
    const [photoFile, setPhotoFile] = useState<File | null>(null);

    const Usernamekey = 'a';
    const PasswordKey = 'a'


    useEffect(() => {
        localStorage.setItem(STORAGE_KEY,photo);
    }, [photo])

    return (
        <UserLoginContext.Provider
            value={{ name, setName, password, setPassword, Usernamekey, PasswordKey, photo, setPhoto, photoFile, setPhotoFile }}>
            {children}
        </UserLoginContext.Provider>
    )
}


export const useAuthUser = () => useContext(UserLoginContext);