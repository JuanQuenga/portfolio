import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import About from "../components/About";
import AnimatedLetters from "../components/AnimatedLetters";
import Contact from "../components/Contact";
import { Navigation } from "../components/Navbar/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ToggleThemeButton from "../components/ToggleThemeButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Juan Quenga&apos;s Portfolio</title>
        <meta name="description" content="Juan Quenga Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed right-0 p-2 z-50">
        <ToggleThemeButton />
      </div>

      <main
        id="#main-content"
        className="bg-slate-300 text-slate-800 dark:bg-slate-900 dark:text-slate-300 z-40"
      >
        <section className="h-screen text-center mx-auto flex flex-col justify-center">
          <h1 className="font-bungee font-extrabold text-6xl ld:text-9xl md:text-9xl cotton-candy">
            Juan Quenga
            {/* <AnimatedLetters letters="Juan Quenga" /> */}
          </h1>
          <h2 className="text-2xl md:text-6xl md:mt-4 mt-2 text-[#0179bb] dark:text-[#fff] font-thin uppercase">
            Front-end, React Developer
          </h2>
          <ul className="background z-10">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
        <About />

        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
