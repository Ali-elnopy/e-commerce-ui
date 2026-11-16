import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg text-white">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="TreandLama" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider">
            TRENDLAMA.
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2025 Trendlama.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/" className="hover:text-amber-50 transition-all">
          Homepage
        </Link>
        <Link href="/" className="hover:text-amber-50 transition-all">
          Contact
        </Link>
        <Link href="/" className="hover:text-amber-50 transition-all">
          Terms of Service
        </Link>
        <Link href="/" className="hover:text-amber-50 transition-all">
          Privacy Policy
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Products</p>
        <Link href="/" className="hover:text-amber-50 transition-all">
          All Products
        </Link>
        <Link href="/" className="hover:text-amber-50 transition-all">
          New Arrivals
        </Link>
        <Link href="/" className="hover:text-amber-50 transition-all">
          Best Sellers
        </Link>
        <Link href="/" className="hover:text-amber-50 transition-all">
          Sale
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Company</p>
        <Link href="/" className="hover:text-amber-50 transition-all">
          About
        </Link>
        <Link href="/" className="hover:text-amber-50 transition-all">
          Contact
        </Link>
        <Link href="/" className="hover:text-amber-50 transition-all">
          Blog
        </Link>
        <Link href="/" className="hover:text-amber-50 transition-all">
          Affiliate Program
        </Link>
      </div>
    </div>
  );
};
export default Footer;
