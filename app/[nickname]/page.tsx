"use client";

import type { NextPage } from "next";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import pic from "/public/1.png";

const Home: NextPage = () => {
  const { nickname }: { nickname: string } = useParams();
  console.log({ nickname });
  return (
    <div className="relative h-screen w-full bg-black">
      <Image
        src={pic}
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default Home;
