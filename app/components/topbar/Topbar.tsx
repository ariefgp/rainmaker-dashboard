'use client'
import { useAuth } from "../auth/AuthContext";

const TopBar = () => {
    const { logout } = useAuth();
  
    return (
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <button onClick={logout} className="btn btn-error">Logout</button>
      </div>
    );
  };
  
  export default TopBar;