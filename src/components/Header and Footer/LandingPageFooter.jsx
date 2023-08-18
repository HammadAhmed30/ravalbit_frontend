import React from "react";
import Wrapper from "../Universal/Wrapper";

export default function LandingPageFooter() {
  return (
    <Wrapper className="w-full relative flex pb-[30px]">
      <p className="text-sm text-white font-[200] font-[poppins]">
        Connect with us:
      </p>
      <img
        className="h-[20px] ml-[15px]"
        src="/images/Home Page/instagram.png"
        alt=""
      />
      <img
        className="h-[20px] ml-[15px]"
        src="/images/Home Page/facebook.png"
        alt=""
      />
      <img
        className="h-[20px] ml-[15px]"
        src="/images/Home Page/twitter.png"
        alt=""
      />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[.5]">
        <span className="h-[3px] w-[3px] absolute left-0 top-[-1px] bg-white rounded-full"></span>
        <span className="h-[3px] w-[3px] absolute right-0 top-[-1px] bg-white rounded-full"></span>
      </div>
    </Wrapper>
  );
}
