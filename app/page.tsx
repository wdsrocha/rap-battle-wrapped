"use client";

import type { NextPage } from "next";
import React, { useState } from "react";
import { Form } from "../components/Form";
import { useRouter } from "next/navigation";

const Home: NextPage = () => {
  const [id, setId] = useState(5); // akbar
  const router = useRouter();
  return (
    <div className="mx-auto flex h-screen max-w-lg flex-col justify-evenly px-4 py-2 md:px-6 md:py-4">
      <div className="mt-8 flex h-full flex-col items-center justify-center gap-y-8">
        <header className="flex flex-col items-center text-slate-300">
          <p>Batalha da Malta</p>
          <h1 className="text-4xl font-bold text-slate-50">
            Retrospectiva 2024
          </h1>
        </header>

        <div className="flex w-full flex-col gap-y-4">
          <Form id={id} setId={setId} />
          <button
            type="button"
            className="w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            onClick={() => {
              router.push(`/${encodeURIComponent(id)}`);
            }}
          >
            Ver minha retrospectiva!
          </button>
        </div>
        <footer className="mb-32 flex flex-col items-center gap-y-2 text-xs text-slate-300">
          <p className="text-slate-400">
            Feito com ❤️ por{" "}
            <a
              href="https://instagram.com/sharp.freestyle"
              className="underline"
            >
              @sharp.freestyle
            </a>{" "}
            e{" "}
            <a
              href="https://instagram.com/batalhadamalta"
              className="underline"
            >
              @batalhadamalta
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
