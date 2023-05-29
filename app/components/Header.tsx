import Image from "next/image";
import { AboutMeData, Page } from "../data/types";
import Link from "next/link";

interface IHeaderProps {
  data: AboutMeData;
  pages: Page[];
}
const Header: React.FC<IHeaderProps> = ({ data, pages }) => {
  return (
    <header className="flex flex-col relative w-full h-48">
      <div className="flex flex-col px-6 justify-around h-full bg-header z-10">
        <nav className="text-right self-end  flex flex-row gap-6">
          {pages.map((page) => {
            return (
              <Link
                href={page.link}
                key={page.id}
                aria-label={page.label}
                className="px-6 py-2 min-w-100 hover:bg-blue-light hover:text-blue font-display uppercase tracking-wide"
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
        <h1 className="text-white uppercase">{data.name}</h1>
      </div>
      <Image
        priority
        height={400}
        width={2000}
        className="h-48 w-full object-cover object-top absolute mb-6"
        alt={`image of ${data.name}`}
        src="/images/jeshoots-com-pUAM5hPaCRI-unsplash.jpg"
        aria-label={`image of ${data.name}`}
      />
    </header>
  );
};

export default Header;
