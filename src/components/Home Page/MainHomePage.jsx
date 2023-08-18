import React from "react";
import LandingPage from "./LandingPage";
import InovationPage from "./InovationPage";
import UnderStandDiscuss from "./UnderStandDiscuss";
import DiscussProject from "./DiscussProject";
import Services from "./Services";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function MainHomePage() {
  return (
    <div className="w-full">
      <Parallax pages={5} className="bg-black">
        <ParallaxLayer offset={0} speed={0.7}>
          <LandingPage />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.01}>
          <InovationPage />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.2}>
          <Services />
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} factor={2} speed={1.1}>
          <DiscussProject />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5}>
          <UnderStandDiscuss />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
