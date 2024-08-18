import { FaLinkedin } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaBehanceSquare } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <aside className="w-16 flex flex-col items-center space-y-14 text-white py-16 px-16 cursor-pointer ">
      
      <div className="relative">
        <Image
          src="/osh.jpg" 
          alt="osh's pic"
          width={256}
          height={256}
          className="rounded-l-lg"  
        />
      </div>
      <nav className="flex flex-col space-between items-center space-y-14">
        <Link href="#" className="text-lg transform rotate-90 text-[#00c2ff]">
          Projects
        </Link>
        <Link href="#" className="text-lg transform rotate-90">
          Details
        </Link>
        <Link href="#" className="text-lg transform rotate-90">
          Articles
        </Link>
        <Link href="#" className="text-lg transform rotate-90">
          Contact
        </Link>
      </nav>
      <div className="flex flex-col items-center space-y-6 mt-auto">
        <IoLogoFigma  className="h-7 w-7"/>
        <FaBehanceSquare className="h-7 w-7"/>
        <FaLinkedin className="h-7 w-7"/>
      </div>
    </aside>
  );
};

export default Navbar;