import { Outlet } from "react-router-dom";

import logo from "../../assets/logo/temp-logo.svg"

export function AuthLayout() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="w-full h-full max-w-[366px] flex justify-center items-center flex-col gap-8">
        <img src={logo} alt="Logo" className="w-14 h-14" />
        <div className="w-full flex justify-center items-center flex-col gap-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
