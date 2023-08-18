import React from "react";
import Wrapper from "../Universal/Wrapper";

export default function InovationPage() {
  return (
    <div className="w-full bg-white h-[60vh]">
      <Wrapper className={"relative h-full flex items-center"}>
        <h1 className="text-2xl md:text-5xl font-[poppins] font-[600]">Innovations begin with <br /> collaborations.</h1>
        <img className="absolute h-[150%] bottom-0 right-0" src="/images/Home Page/Robot hand.png" alt="" />
      </Wrapper>
    </div>
  );
}
