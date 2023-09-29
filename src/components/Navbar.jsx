import { NavLink } from "react-router-dom";
import SuperdaoLogo from "./SuperdaoLogo";
import Button from "./Button";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section className="flex justify-between items-center mt-6 mb-40">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <SuperdaoLogo />
      <div className="lg:block md:block sm:hidden font-semibold text-white me-14">
        <NavLink className="me-11">Product</NavLink>
        <NavLink className="me-11">Use Cases</NavLink>
        <NavLink className="me-11">Learn</NavLink>
        <NavLink className="me-11">About</NavLink>
        <NavLink>Jobs</NavLink>
      </div>
      <Button
        variant="dark"
        className="lg:block md:block sm:hidden font-semibold rounded-xl py-2.5 px-5"
      >
        Login
      </Button>
      <Button
        variant="dark"
        className="lg:hidden md:hidden sm:block font-semibold rounded-xl py-2.5 px-5"
        onClick={() => {
          setShowSidebar(true);
        }}
      >
        =
      </Button>
    </section>
  );
}
