import Image from "next/image";

// SVGs
import { LinkedInSVG, GitHubSVG } from "./Svgs";

const Header = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center bg-header-background bg-header py-8 text-header-text shadow-xl">
      <Image
        src="/images/profile.webp"
        alt="Carl Lindman"
        width={280}
        height={280}
        quality={90}
        priority={true}
        className="rounded-full"
      />
      <h1 className="text-shadow pt-4 pb-2 text-5xl font-black">
        Carl Lindman
      </h1>
      <span className="text-lg font-normal">
        Web Developer/React Enthusiast
      </span>
      <div className="flex flex-row gap-x-4 py-4 drop-shadow">
        <a
          href="
          https://www.linkedin.com/in/carl-lindman-0926"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInSVG />
        </a>
        <a
          href="https://www.github.com/lindman-carl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubSVG />
        </a>
      </div>
    </header>
  );
};

export default Header;
