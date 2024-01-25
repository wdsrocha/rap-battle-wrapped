"use client";

import type { NextPage } from "next";
import React, { useState } from "react";
import { Form } from "../components/Form";
import { useRouter } from "next/navigation";
import { InstagramPost } from "../components/InstagramPost";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <div className="mx-auto h-full max-w-lg px-4 py-2 md:px-6 md:py-4">
      <div className="mt-8 flex h-full flex-col items-center gap-y-8">
        <header className="flex flex-col items-center text-slate-300">
          <p>Batalhas de Rima do Amazonas</p>
          <h1 className="text-4xl font-bold text-slate-50">
            Retrospectiva 2023
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Por{" "}
            <a
              className="text-slate-400 underline"
              href="https://instagram.com/am._news"
            >
              AM News
            </a>{" "}
            e{" "}
            <a
              className="text-slate-400 underline"
              href="https://instagram.com/sharp.freestyle"
            >
              Sharp
            </a>
          </p>
        </header>
        {/* TODO: descobrir pq alterar o form quebra o embed */}
        <Form value={value} setValue={setValue} />
        <button
          type="button"
          className="w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          onClick={() => {
            router.push(`/${encodeURIComponent(value)}`);
          }}
        >
          Ver minha retrospectiva!
        </button>

        <hr className="w-full border border-slate-600 opacity-50" />

        <div>Confira também os melhores MCs do ano:</div>
        <InstagramPost />

        <hr className="w-full border border-slate-600 opacity-50" />

        <div className="prose prose-slate prose-invert">
          <h2>O que é isso?</h2>
          <p>O site foi criado para apresentar [...]</p>
          <h2>De onde vem os dados?</h2>
          <p>
            Os dados foram coletados pelo Henrique, Enma e DN7 ao longo de 2023
            e postados na página @am._news do Instagram
          </p>
          <p>
            Mais de 2.000 batalhas foram registradas no Instagram e levadas para
            uma planilha posteriormente
          </p>
          <h2>Posso ver a planilha original?</h2>
          <p>
            Ela está meio bagunçada, mas pode sim 🙂:{" "}
            <a href="https://docs.google.com/spreadsheets/d/1kgR-4qt9nULiNn9YrR_qOgUwiOj5-zKZrtEWKHhnoDI/edit#gid=196351582">
              Batalhas Amazonas 2023 - Planilhas Google
            </a>
          </p>
          <h2>Por que minha retrospectiva não está 100% correta?</h2>
          <p>
            As informações usadas são apenas das batalhas que enviaram seus
            dados para a página{" "}
            <a href="https://instagram.com/am._news">@am._news</a> no instagram,
            então é esperado que falte alguns dados ou possuam algum erro.
          </p>
          <p>
            Para que a retrospectiva de 2024 seja exata, lembre de enviar os
            resultados de todas as folhinhas que ganhar e de incentivar as
            organizações a participarem!
          </p>
          <h2>Quem é fez esse projeto?</h2>
          <ul>
            <li>Coleta de dados: AM News</li>
            <li>Análise dos dados: Sharp</li>
            <li>Criação do site: Sharp</li>
          </ul>
          <p>
            Um agradecimento muito especial a todos que ajudaram a passar todos
            os dados dos stories do Instagram para a planilha:
          </p>
          <ul>
            <li>Barb</li>
            <li>Levi</li>
            <li>Lohan</li>
            <li>Mont</li>
            <li>Onec</li>
            <li>Pura</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
