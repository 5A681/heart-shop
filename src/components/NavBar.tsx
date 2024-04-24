import React from "react";

export default function NavBar() {
  return (
    <div className="w-100% bg-[#AAFF00]  h-[40px] ">
      <div className="flex justify-between items-center h-[100%] text-white">
        <div>
        <button>Heart Shop</button>
      </div>
      <div className="flex gap-2 h-[100%] ">
        <div className="flex h-[100%] items-center ">
            <div className="w-[32px] ">
              <img src="/src/assets/login.png" alt="login" />
            </div>
            <span className="">Login</span>
        </div>
        <div className="flex h-[100%] items-center">
          <div className="w-[32px]">
            <img src="/src/assets/register.png" alt="register" />
          </div>
            <span>Register</span>
        </div>
      </div>
      </div>
    </div>
  );
}
