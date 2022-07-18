import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <header className="lg:px-32 px-8 bg-background text-white flex flex-wrap items-center py-2 shadow-md py-5">
      <div className="flex-1 flex justify-between items-center">
        <Link href='#'>
          <div class='flex items-stretch text-xl'>
            <Image
              alt="logo"
              src="/logo.png"
              width={'63px'}
              height={'63px'}
            />
            <div class='ml-2 white-text self-center'>
              Terrestrial Rock
            </div>
          </div>
        </Link>
      </div>
      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg className="fill-current text-white-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" stroke="white" fill="white"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden md:flex md:items-center md:w-auto w-full text-white" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0 mb-0">
            <li>
              <Link href="/">
                <div className='p-2 white-text'>
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className='p-2 white-text'>
                  About
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className='p-2 white-text'>
                  Collections
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className='p-2 white-text'>
                  Roadmap
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className='p-2 white-text'>
                  Whitepaper
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className='p-2 white-text'>
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Nav;
