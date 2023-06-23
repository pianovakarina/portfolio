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
      <div className="flex flex-col justify-around h-full sm:px-6 px:1 bg-header z-10">
        <nav className="text-right flex flex-row sm:gap-6 self-end gap-1">
          {pages.map((page) => {
            return (
              <Link
                href={page.link}
                key={page.id}
                aria-label={page.label}
                className="px-6 py-2 min-w-100 hover:bg-blue-light hover:text-blue font-display uppercase tracking-wide sm:bg-none
								bg-white"
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
        <h1 className="text-white uppercase pl-2 sm:pl-0">{data.name}</h1>
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
