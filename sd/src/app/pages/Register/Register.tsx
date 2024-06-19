import { useState } from 'react';
import { useAuthUser } from "@/contexts/LoginUser";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const userAuthCtx = useAuthUser();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await userAuthCtx?.registerUser(username, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
      <div className="w-full max-w-md p-4 bg-white rounded-md shadow-md" style={{ width: "90vw", maxWidth: "40rem", padding: "1rem" }}>
        <h1 className="text-3xl font-extrabold text-center mb-6">Register</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); handleRegister(); }}>
          <label className="flex flex-col text-2xl text-blue-600">
            Username
            <input
              type="text"
              placeholder="Username"
              className="p-4 rounded-md mt-3 normal-case bg-gray-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="flex flex-col text-2xl text-blue-600">
            Password
            <input
              type="password"
              placeholder="Password"
              className="p-4 rounded-md mt-3 bg-gray-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="flex flex-col text-2xl text-blue-600">
            Confirm Password
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-4 rounded-md mt-3 bg-gray-200"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="bg-blue-700 text-white p-4 rounded-md text-2xl cursor-pointer hover:bg-blue-600 transition-opacity"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
