"use client";

import React, { useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const page = () => {
  //적용할 DOM 요소
  const configDivRef = useRef<HTMLDivElement>(null);

  //너비가 채워지고 비워줄 상태를 체크
  const [configOpen, setConfigOpen] = useState<boolean>(false);

  const props = useSpring({
    //state 상태가 업데이트 되면 적용될 width 값을 가지는 객체
    width: configOpen ? configDivRef.current?.clientWidth : 0,
  });

  console.log(typeof props.width);

  return (
    <div className="flex flex-col bg-gray-200">
      <p>{"Config"}</p>
      <animated.p>
        {props.width?.to((x) => {
          console.log(x);
          return x;
        })}
      </animated.p>
      <div
        ref={configDivRef}
        className="w-[200px] h-[100px] outline outline-2 outline-neutral-700 cursor-pointer relative"
        onClick={() => {
          setConfigOpen((prev) => !prev);
        }}
      >
        <animated.div className="absolute h-full bg-pink-400" style={props} />
        <animated.div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center"
          style={props}
        >
          {/* 
          to: 애니메이션의 상태값 반환
          toFixed: 소수점 없이 정수로 반환 
          */}
          {props.width?.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
};

export default page;
