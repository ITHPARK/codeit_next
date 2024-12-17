"use client";

import React, { MutableRefObject, useRef } from "react";
import { animated, useScroll } from "@react-spring/web";

const page = () => {
  const progressbar = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({});

  return (
    <div className="w-fu">
      <animated.div
        ref={progressbar}
        className=" h-4  bg-red-400 sticky top-0 left-0 "
        style={{
          width: scrollYProgress.to((value) => `${value * 100}%`),
        }}
      ></animated.div>

      <ul className="pt-10 flex flex-col">
        {Array.from({ length: 100 }).map((_, index) => {
          return <li key={index}>본문{index + 1} 입니다</li>;
        })}
      </ul>
    </div>
  );
};

export default page;
