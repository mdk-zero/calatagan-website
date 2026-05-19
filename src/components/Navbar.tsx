import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Image src="/next.svg" alt="" width={100} height={100} />
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-neutral-600 hover:text-blue-700 transition-colors">
              About
            </Link>
            <Link
              href="/history"
              className="text-neutral-600 hover:text-blue-700 transition-colors"
            >
              History
            </Link>
            <Link
              href="/contact"
              className="text-neutral-600 hover:text-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
