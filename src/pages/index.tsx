import Head from "next/head";

// components
import About from "@/components/About";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import WebApps from "@/components/WebApps";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carl Lindman</title>
        <meta
          name="description"
          content="Carl Lindman web developer portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-screen flex-col items-center justify-start px-4 text-content-text sm:px-0">
        <WebApps />
        <About />
        <Skills />
      </main>
      <footer className="flex justify-center p-8 text-content-text">
        @lindman_dev
      </footer>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
