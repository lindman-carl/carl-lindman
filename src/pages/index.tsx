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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <Header />
      <main className="flex w-full flex-col items-center justify-start px-4 text-content-text sm:px-0">
        <Skills />
        <WebApps />
        <About />
      </main>
      <footer className="mt-8 mb-4 flex justify-center text-content-text">
        <span>
          <span className="">Carl Lindman</span>&nbsp;
          <span className="align-super text-xs text-violet-600">
            {new Date().getFullYear()}
          </span>
        </span>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
