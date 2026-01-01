import Link from "next/link";

function Header2() {
  return (
    <header className="bg-white text-[#726E8D] w-full border-b">
      {/* Navigation */}
      <nav className="flex justify-center items-center py-4">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base">
          <li>
            <Link
              href="/about"
              className="hover:text-[#2A254B] transition-colors duration-200 hover:border-b-2 hover:border-[#2A254B] pb-1"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/ProductListing2"
              className="hover:text-[#2A254B] transition-colors duration-200 hover:border-b-2 hover:border-[#2A254B] pb-1"
            >
              Plant pots
            </Link>
          </li>
          <li>
            <Link
              href="/Ceramics"
              className="hover:text-[#2A254B] transition-colors duration-200 hover:border-b-2 hover:border-[#2A254B] pb-1"
            >
              Ceramics
            </Link>
          </li>
          <li>
            <Link
              href="/Tables"
              className="hover:text-[#2A254B] transition-colors duration-200 hover:border-b-2 hover:border-[#2A254B] pb-1"
            >
              Tables
            </Link>
          </li>
          <li>
            <Link
              href="/ProductListing"
              className="hover:text-[#2A254B] transition-colors duration-200 hover:border-b-2 hover:border-[#2A254B] pb-1"
            >
              Chairs
            </Link>
          </li>
          <li>
            <Link
              href="/Crockery"
              className="hover:text-[#2A254B] transition-colors duration-200 hover:border-b-2 hover:border-[#2A254B] pb-1"
            >
              Crockery
            </Link>
          </li>
          <li>
            <Link
              href="/Tableware"
              className="hover:text-[#2A254B] transition-colors duration-200 hover:border-b-2 hover:border-[#2A254B] pb-1"
            >
              Tableware
            </Link>
          </li>
          <li>
            <Link
              href="/Cutlery"
              className="hover:text-[#2A254B] transition-colors duration-200 hover:border-b-2 hover:border-[#2A254B] pb-1"
            >
              Cutlery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header2;
