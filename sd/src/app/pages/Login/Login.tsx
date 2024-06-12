import { useAuthUser } from "@/contexts/LoginUser"
import { ResetPassword } from "../template/ResetPassword"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const userAuthCtx = useAuthUser();
  const navigate = useNavigate();

  const [warn, setWarn] = useState(false);

  const validateUser = () => {

    const trimmedName = userAuthCtx?.name.trim();
    const trimmedPassword = userAuthCtx?.password.trim();

    if (trimmedName === userAuthCtx?.Usernamekey && trimmedPassword === userAuthCtx?.PasswordKey) {
      navigate('/Home');
    } else {
      setWarn(true);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => event.key === 'Enter' ? validateUser : null;



  return <>
    <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
      <div className="w-full max-w-md p-4 bg-white rounded-md shadow-md" style={{ width: "90vw", maxWidth: "40rem", padding: "1rem" }}>
        <h1 className="text-3xl font-extrabold text-center mb-6">Login</h1>
        {warn && <p className="text-red-500 mb-4 text-center">Username or password is incorrect. Try again!🤔</p>}
        {!warn && <p className="text-blue-700 mb-4 text-2xl text-center">Login 👨🏾‍💻✅</p>}
        <form className="flex flex-col gap-4" onClick={e => e.preventDefault()}>
          <label className="flex flex-col text-2xl text-blue-600">
            User
            <input
              type="text"
              placeholder="Username"
              className="p-4 rounded-md mt-3 normal-case bg-gray-200"
              value={userAuthCtx?.name}
              onChange={(e) => userAuthCtx?.setName(e.target.value)}
            />
          </label>
          <label className="flex flex-col text-2xl text-blue-600">
            Passkey
            <input
              type="password"
              placeholder="Password"
              className="p-4 rounded-md mt-3 bg-gray-200"
              value={userAuthCtx?.password}
              onChange={(e) => userAuthCtx?.setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </label>
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={validateUser}
              className="bg-blue-700 text-white p-4 rounded-md text-2xl cursor-pointer hover:bg-blue-600 transition-opacity"
            >
              Send
            </button>
            <ResetPassword />
          </div>
        </form>
      </div>
    </div>
  </>
};

