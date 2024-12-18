"use client";

import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";

import React from "react";

const page = () => {
  const xMotionValue = useMotionValue(0);

  useMotionValueEvent(xMotionValue, "change", (latestValue) => {
    console.log("x축 : ", latestValue);
  });

  return (
    <motion.div
      className="px-4 py-2 rounuded-md bg-red-300"
      style={{
        x: xMotionValue,
        height: xMotionValue,
      }}
      drag
    />
  );
};

export default page;
