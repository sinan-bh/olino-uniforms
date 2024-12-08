import React from "react";
import Home from "@/components/user/home/home";
import About from "./home/about";

export default function hero() {
  return (
    <div className="w-full ">
      <Home />
      <About />
    </div>
  );
}
