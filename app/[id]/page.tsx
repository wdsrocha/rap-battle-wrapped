"use client";

import type { NextPage } from "next";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const Home: NextPage = () => {
  const { id }: { id: string } = useParams();
  return (
    <div className="relative h-screen w-full bg-black">
      <Image
        className="h-auto w-full object-contain"
        priority
        fill={true}
        src={`/${id}.png`}
        alt=""
      />
    </div>
  );
};

export default Home;
