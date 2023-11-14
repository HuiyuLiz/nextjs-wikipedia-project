import Link from "next/link";
import SearchInput from "./SearchInput";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <Link href="/" className="font-semibold text-xl tracking-tight">
            Wikipedia API
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <SearchInput></SearchInput>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
