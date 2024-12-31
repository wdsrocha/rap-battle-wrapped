"use client";

import type { NextPage } from "next";
import React from "react";
import { useParams } from "next/navigation";

const Home: NextPage = () => {
  const { nickname }: { nickname: string } = useParams();
  console.log({ nickname });
  return (
    <div className="flex h-full items-center justify-center bg-black shadow-xl"></div>
  );
};

export default Home;
