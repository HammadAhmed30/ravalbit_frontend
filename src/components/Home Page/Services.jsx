import Link from "next/link";
import React from "react";
import Wrapper from "../Universal/Wrapper";

export default function Services() {
  return (
    <div className=" w-full ">
      <Wrapper
        className={"flex flex-col md:flex-row justify-between relative py-20"}
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[.5]">
          <span className="h-[3px] w-[3px] absolute left-0 top-[-1px] bg-white rounded-full"></span>
          <span className="h-[3px] w-[3px] absolute right-0 top-[-1px] bg-white rounded-full"></span>
        </div>
        <div className="w-[30%]">
          <h1 className="text-white text-lg font-[poppins]">
            Software development
          </h1>
          <p className="text-white text-sm font-[poppins] font-[200] my-8">
            Our team of experienced developers uses the latest technologies and
            best practices to build high-quality software that meets our
            clients' unique needs.{" "}
          </p>
          <Link className="text-white font-[poppins]" href="/">
            Learn More
          </Link>
        </div>
        <div className="w-[30%]">
          <h1 className="text-white text-lg font-[poppins]">Crypto Trading</h1>
          <p className="text-white text-sm font-[poppins] font-[200] my-8">
            Secure your futures finances with RavalBit’s trading plans which
            provide secure profit ratios on their investments.
          </p>
          <Link className="text-white font-[poppins]" href="/">
            Learn More
          </Link>
        </div>
        <div className="w-[30%]">
          <h1 className="text-white text-lg font-[poppins]">
            Software development
          </h1>
          <p className="text-white text-sm font-[poppins] font-[200] my-8">
            Get yourself stunning GFX services with Ravalbit’s GFX PARTNER
            company which provides all kind of assessment{" "}
            <a className="underline" href="/">
              Agaaz
            </a>
          </p>
          <Link className="text-white font-[poppins]" href="/">
            Learn More
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[.5]">
          <span className="h-[3px] w-[3px] absolute left-0 top-[-1px] bg-white rounded-full"></span>
          <span className="h-[3px] w-[3px] absolute right-0 top-[-1px] bg-white rounded-full"></span>
        </div>
        |
      </Wrapper>
    </div>
  );
}
