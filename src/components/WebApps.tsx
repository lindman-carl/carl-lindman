import Image from "next/image";

const WebApps = () => {
  return (
    <section className="mt-8 w-full max-w-[65ch]">
      <h2 className="mb-6 text-left text-2xl font-black text-content-text">
        Web apps
      </h2>
      <div className="grid grid-cols-2 gap-x-4 pb-2 drop-shadow-lg sm:grid-cols-3">
        <a
          href="https://seasweeper.lindman.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/portfolio/seasweeper-logo-960.webp"
            alt="Sea Sweeper"
            width={200}
            height={200}
            className="justify-self-center rounded-xl"
          />
        </a>
        <a
          href="https://tackmantel.lindman.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/portfolio/tackmantel-logo-960.webp"
            alt="Täckmantel"
            width={200}
            height={200}
            className="aspect-square justify-self-center rounded-xl"
          />
        </a>
      </div>
    </section>
  );
};

export default WebApps;
