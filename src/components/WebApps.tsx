import Image from "next/image";

const BadgeSVG = () => (
  <div className="relative flex max-w-min -rotate-6 items-center justify-center outline drop-shadow">
    <svg width="100" height="100" viewBox="0 0 26.5 26.5" className="absolute">
      <path
        className="fill-header-contrast stroke-white"
        strokeWidth={0.25}
        d="M 8.2445866,23.541769 7.033519,21.769407 4.8896372,21.877643 4.2855333,19.817786 2.213134,19.258228 2.2751277,17.11251 0.47707169,15.939932 1.1990945,13.91839 -0.14861184,12.247573 1.1627635,10.548089 0.39732968,8.5425831 2.1696911,7.3315155 2.0614557,5.1876337 4.121312,4.5835298 4.6808699,2.5111305 6.826588,2.5731242 7.9991659,0.77506822 10.020708,1.497091 l 1.670818,-1.34770632 1.699483,1.31137542 2.005506,-0.7654339 1.211068,1.7723614 2.143882,-0.1082354 0.604104,2.0598563 2.072399,0.5595579 -0.06199,2.1457182 1.798056,1.1725778 -0.722023,2.0215426 1.347707,1.670817 -1.311376,1.699484 0.765434,2.005506 -1.772361,1.211067 0.108235,2.143882 -2.059856,0.604104 -0.559558,2.072399 -2.145718,-0.06199 -1.172578,1.798056 -2.021542,-0.722023 -1.670818,1.347706 -1.699483,-1.311375 z"
        transform="matrix(1.0995883,0,0,1.0995883,0.21346472,-0.11420935)"
      />
    </svg>
    <span className="absolute text-center font-bold leading-none text-white ">
      856
      <br />
      upvotes
      <br />
      on reddit
    </span>
  </div>
);
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
          className="relative"
        >
          <Image
            src="/images/portfolio/seasweeper-logo-960.webp"
            alt="Sea Sweeper"
            width={200}
            height={200}
            className="justify-self-center rounded-xl"
          />
          <div className="absolute right-6 bottom-6">
            <BadgeSVG />
          </div>
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
