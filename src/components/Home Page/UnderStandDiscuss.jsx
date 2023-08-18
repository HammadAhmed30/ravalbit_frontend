import React from "react";
import Wrapper from "../Universal/Wrapper";
import styles from "../../styles/HomePage.module.css"

export default function UnderStandDiscuss() {
  return (
    <div className="h-[100vh] w-full bg-[#00FFD0]">
      <Wrapper className={"relative h-full flex justify-center items-center"}>
        <div className="flex flex-col md:flex-row items-start justify-start">
          <h1 className={`${styles.costum_CSS_we_heading} text-[4em] md:text-[14em] leading-[90%] font-bold text-transparent`}>
            WE
          </h1>
          <div className="flex flex-col justify-start items-start md:ml-[20px] relative">
            <p className="text-[2em] md:text-[6.5em] leading-[80%]">understand, <br /> discuss,</p>
            <p className="text-[2em] md:text-[6.5em] leading-[120%] mt-[10px] text-[#00FFD0] flex justify-center items-center bg-[#00F]">engage</p>
            <img
              className="absolute w-[350px] right-0 -bottom-[50%]"
              src="/images/Home Page/facesInDiscuss.png"
              alt=""
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
