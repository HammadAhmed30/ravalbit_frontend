import React from "react";
import Background from "../Random/Background";
import HomePageNavBar from "../Header and Footer/HomePageNavBar";
import styles from "../../styles/HomePage.module.css";
import Wrapper from "../Universal/Wrapper";
import LandingPageFooter from "../Header and Footer/LandingPageFooter";

export default function LandingPage() {
  return (
    <div className={`bg-black w-full h-[100vh] relative overflow`}>
      <div className="w-full h-[100vh]">
        <div className="z-10">
          <HomePageNavBar />
        </div>
        <div
          className={`${styles.blue_home_ball} w-[60vw] h-[60vw] -top-[45%] -left-[15%] absolute rounded-full border-[#008196] border-[6vw] `}
        ></div>
        <div
          className={`${styles.green_home_ball} w-[60vw] h-[60vw] ] -bottom-[45%] -right-[19%] absolute rounded-full border-[#00B190] border-[6vw] `}
        ></div>
        <Wrapper
          className={"flex z-[2] relative justify-center items-center mt-[11%]"}
        >
          <div className="flex items-center">
            <img
              className="w-full max-w-[300px]"
              src="/images/Home Page/LadyHomePage.png"
              alt=""
            />
            <h1
              className={`${styles.heading_text_home_page} text-white text-xl md:text-2xl max-w-[500px] text-center`}
            >
              Digital solutions to better engage your audience
            </h1>
          </div>
        </Wrapper>
        <div className="absolute bottom-[25px] w-full z-[2]">
          <LandingPageFooter />
        </div>
      </div>
      <div className="h-full top-0 left-0 absolute w-full z-[1]">
        <Background />
      </div>
    </div>
  );
}
